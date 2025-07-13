<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Lesson extends Model
{

    use HasFactory;

    //
    protected $guarded = [];

    protected $casts = [
        'date' => 'date',
        'time' => 'datetime:H:i',     // ensures $lesson->time is Carbon
    ];

    public function tutor()
    {
        return $this->belongsTo(Tutor::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
