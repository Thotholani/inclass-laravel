<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        DB::table('languages')->insert([
            ['code' => 'en', 'name' => 'English'],
            ['code' => 'bm', 'name' => 'Cibemba'],
            ['code' => 'ny', 'name' => 'Nyanja'],
            ['code' => 'ch', 'name' => 'Chichewa'],
            ['code' => 'lo', 'name' => 'Silozi'],
            ['code' => 'fr', 'name' => 'French'],
            ['code' => 'zh', 'name' => 'Mandarin'],
        ]);
    }
}
