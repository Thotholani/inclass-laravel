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
        Schema::create('tutors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                ->unique()
                ->constrained()
                ->cascadeOnDelete();
            $table->decimal('rating', 3, 2)->default(0);   // e.g. 4.75
            $table->unsignedInteger('reviews')->default(0);
            $table->string('subject');                     // main subject
            $table->text('bio');
            $table->decimal('hourly_rate', 8, 2);          // ZMW 999,999.99 max
            $table->string('mobile_money_number', 20);
            $table->string('qualification_path')->nullable(); // stored file
            $table->enum('verification_status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tutors');
    }
};
