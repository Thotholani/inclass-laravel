<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreLessonRequest;
use App\Http\Requests\UpdateLessonRequest;
use App\Models\Lesson;

class LessonController extends Controller
{

    public function index()
    {

//        dd("hello from lesons");

        return inertia("app/lessons", ["lessons" => Lesson::with(["tutor.user", "student.user"])->get()]);
    }

    public function store(StoreLessonRequest $request)
    {
        //TODO: Book a lesson
    }

    public function update(UpdateLessonRequest $request, Lesson $lesson)
    {
        //TODO: Reschedule a lesson
    }

    public function destroy(Lesson $lesson)
    {
        //TODO: Cancel a lesson
    }
}
