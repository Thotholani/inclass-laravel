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
        Schema::create('tutor_levels', function (Blueprint $table) {
            $table->foreignId('tutor_id')->constrained('tutors')->cascadeOnDelete();
            $table->char('level_code', 2);
            $table->primary(['tutor_id', 'level_code']);

            $table->foreign('level_code')->references('code')->on('education_levels');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tutor_levels');
    }
};
