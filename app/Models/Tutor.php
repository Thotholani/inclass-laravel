<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    use HasFactory;

//    protected $fillable = [
//        'user_id', 'subject', 'bio', 'hourly_rate',
//        'mobile_money_number', 'qualification_path',
//        'verification_status',
//    ];

    public function languages()
    {
        return $this->belongsToMany(
            Language::class,
            'tutor_languages',
            'tutor_id',
            'language_code',
            'id',
            'code'
        );
    }

    public function levels()
    {
        return $this->belongsToMany(
            EducationLevel::class,   // related model
            'tutor_levels',          // pivot table
            'tutor_id',              // FK on pivot to this model
            'level_code',            // FK on pivot to related model
            'id',                    // local key (tutors.id)
            'code'                   // related key (education_levels.code)
        );
    }

    public function availabilities()
    {
        return $this->hasMany(TutorAvailability::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function lessons()
    {
        return $this->hasMany(Lesson::class);
    }
}
