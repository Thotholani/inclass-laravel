<?php

namespace Database\Factories;

use App\Models\Student;
use App\Models\Tutor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Lesson>
 */
class LessonFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        // pick a random future date/time (today-30 days to today+30 days)
        $start = fake()->dateTimeBetween('-30 days', '+30 days');

        return [
            'date' => $start->format('Y-m-d'),
            'time' => $start->format('H:i:s'),
            'subject' => fake()->randomElement([
                'Mathematics', 'Science', 'English', 'Physics', 'Chemistry',
                'Biology', 'History', 'Geography', 'Programming',
            ]),
            'status' => fake()->randomElement(['pending', 'completed', 'canceled']),
            'tutor_id' => Tutor::factory(),     // ✅ returns PK after create()
            'student_id' => Student::factory(),   // ✅
        ];
    }

}
