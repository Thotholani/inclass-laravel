<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Language extends Model
{
    /** @use HasFactory<\Database\Factories\LanguageFactory> */
    use HasFactory;

    public $incrementing = false;   // no auto-increment
    protected $keyType = 'string';  // primary key is a string
    protected $primaryKey = 'code'; // <--
    public $timestamps = false;     // lookup table, no created_at
}
