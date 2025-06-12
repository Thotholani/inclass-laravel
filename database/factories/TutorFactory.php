<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tutor>
 */
class TutorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'user_id' => User::factory()->state(['role' => 'tutor']),
            'rate' => fake()->numberBetween(80, 300),
            'subject' => fake()->randomElement(['English', 'Physics', 'Chemistry']),
            'rating' => fake()->randomFloat(1, 3, 5),
            'reviews' => fake()->numberBetween(0, 500),
            'languages' => fake()->randomElement(['English', 'French', 'Chichewa', 'Cibemba', 'Silozi', 'Mandarin']),
            'bio' => fake()->paragraph(),
        ];
    }
}
