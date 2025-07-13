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
        Schema::create('lessons', function (Blueprint $table) {
            $table->id();
            $table->date("date");
            $table->time("time");
            $table->foreignId("tutor_id")->constrained();
            $table->foreignId("student_id")->constrained();
            $table->string("subject");
            $table->enum("status", ["pending", "canceled", "completed", "under_investigation"])->default("pending");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
