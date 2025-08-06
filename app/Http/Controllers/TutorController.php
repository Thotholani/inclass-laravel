<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTutorRequest;
use App\Models\Tutor;
use Illuminate\Support\Facades\DB;

class TutorController extends Controller
{
    public function create()
    {
        return inertia('auth/tutor-register');
    }

    public function store(StoreTutorRequest $request)
    {
        // dd($request->all());
        $user = $request->user();

        DB::transaction(function () use ($request, $user) {
            /* ---------- 1. store files -------------------------------- */
            $path = $request->file('image')->store('profile-images', 'public');
            $user->image = $path;
            $qualificationPath = $request->file('qualification')->storePublicly("tutors/{$user->id}/qualification", 'public');

            /* ---------- 2. core tutor row ---------------------------- */
            $user->fill([
                'name' => $request->name,
                'role' => 'tutor',
            ])->save();

            $tutor = Tutor::updateOrCreate(
                ['user_id' => $user->id],
                [
                    'subject' => $request->subject,
                    'bio' => $request->bio,
                    'hourly_rate' => floatval($request->hourly_rate),
                    'mobile_money_number' => $request->mobile_money_number,
                    'qualification_path' => $qualificationPath,
                    'verification_status' => 'pending',
                ]
            );

            /* ---------- 3. pivot tables ------------------------------ */
            $tutor->languages()->sync($request->languages);           // ['en','bm',…]
            $tutor->levels()->sync($request->education_levels);       // ['SC','CO',…]

            /* ---------- 4. availability slots ------------------------ */
            $tutor->availabilities()->delete(); // wipe old drafts
            foreach ($request->schedule as $dow => $day) {
                if (!$day['isActive']) continue;
                foreach ($day['timeSlots'] as $slot) {
                    $tutor->availabilities()->create([
                        'day_of_week' => $this->dayIndex($dow),        // “Monday”→1
                        'start_time' => $slot['start'],
                        'end_time' => $slot['end'],
                    ]);
                }
            }
        });

        /* ---------- 5. redirect / flash ---------------------------- */
        return redirect()->route('tutor-completed')
            ->with('success', 'Your tutor profile was submitted! We’ll review your documents shortly.');
    }

    private function dayIndex(string $day): int
    {
        return array_search($day, [
                'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
            ]) + 1;
    }
}
