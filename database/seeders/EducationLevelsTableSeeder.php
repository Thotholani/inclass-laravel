<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EducationLevelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('education_levels')->insert([
            ['code' => 'PR', 'name' => 'Primary School'],
            ['code' => 'SC', 'name' => 'High School'],
            ['code' => 'CO', 'name' => 'College / University'],
            ['code' => 'AD', 'name' => 'Adult Education'],
        ]);
    }
}
