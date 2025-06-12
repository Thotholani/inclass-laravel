<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    public function create()
    {
        return inertia("auth/login");
    }

    public function store(Request $request)
    {


        $validated = $request->validate([
            "email" => "required|email",
            "password" => "required"
        ]);

        $matches = Auth::attempt($validated);

        if (!$matches) {
            throw ValidationException::withMessages(
                ["email" => "Your email or password combination did not match our records."]
            );
        }

        $request->session()->regenerate();

        $user = User::find(Auth::id());


        switch ($user->role) {
            case "user":
                return redirect("select-role");
            default:
                return redirect("dashboard");
        }
    }

    public function destroy()
    {
        Auth::logout();

        return redirect('/login');
    }
}
