<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTutorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'mobile_money_number' => 'required|string|min:10|max:20',
            'subject' => 'required|string|max:255',
            'education_levels' => 'required|array|min:1',
            'education_levels.*' => 'exists:education_levels,code',
            'languages' => 'required|array|min:1',
            'languages.*' => 'exists:languages,code',

            'bio' => 'required|string|min:150|max:800',
            'hourly_rate' => 'required|numeric|min:10|max:500',

            'image' => 'required|image|max:5120',          // 5 MB
            'qualification' => 'required|file|mimes:pdf,jpg,jpeg,png|max:8192',

            'schedule' => 'required|array',
            'schedule.*.isActive' => 'required|boolean',
            'schedule.*.timeSlots' => 'array',
            'schedule.*.timeSlots.*.start' => 'required_with:schedule.*.isActive|date_format:H:i',
            'schedule.*.timeSlots.*.end' => 'required_with:schedule.*.isActive|date_format:H:i',

            'agreed_to_terms' => 'accepted',
        ];
    }
}
