<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TutorController extends Controller
{
    public function create()
    {
        return inertia('auth/tutor-register');
    }

    public function store(Request $request)
    {
        $request->validate([
            "name" => ["required", "string", "max:255", "min:4"],
            "subject" => ["required"],
            "mobile_number" => ["required", "string", "max:10"],

        ]);
    }
}
