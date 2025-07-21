<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EducationLevel extends Model
{
    /** @use HasFactory<\Database\Factories\EducationLevelFactory> */
    use HasFactory;

    public $incrementing = false;      // PK is a string, not auto-id
    protected $keyType = 'string';
    protected $primaryKey = 'code';    // ← important
    public $timestamps = false;
}
