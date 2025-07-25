<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tutor_languages', function (Blueprint $table) {
            $table->foreignId('tutor_id')->constrained('tutors')->cascadeOnDelete();
            $table->char('language_code', 2);
            $table->primary(['tutor_id', 'language_code']);

            $table->foreign('language_code')->references('code')->on('languages');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tutor_languages');
    }
};
