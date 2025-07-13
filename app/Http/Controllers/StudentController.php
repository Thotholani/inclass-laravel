<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class StudentController extends Controller
{
    public function create()
    {
        return inertia('auth/student-register');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:3'],
            'image' => ['nullable', 'image', 'max:2048']
        ]);

        $user = $request->user();   // nicer than User::find(Auth::id())

        if ($request->hasFile('image')) {
            // store on the PUBLIC disk so /storage/… serves it
            $path = $request->file('image')->store('profile-images', 'public');

            // delete old photo if one exists
            if ($user->image) {
                Storage::disk('public')->delete($user->image);
            }

            $user->image = $path;
        }

        $user->fill([
            'name' => $validated['name'],
            'role' => 'student',
        ])->save();

        // make sure the Student row exists
        $user->student()->firstOrCreate([]);

        // re-authenticate so Inertia gets fresh data on next page
        Auth::login($user->fresh());

        return redirect()->route('dashboard');
    }
}
