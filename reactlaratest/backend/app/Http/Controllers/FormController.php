<?php

namespace App\Http\Controllers;
use App\Models\FormData;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function submit(Request $request)
    {
        // Validate the incoming request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            // Add other fields as necessary
        ]);

        // Save the validated data to the database
        $formData = new FormData();
        $formData->name = $validatedData['name'];
        $formData->email = $validatedData['email'];
        // Save other fields as necessary
        $formData->save();

        return response()->json(['message' => 'Form submitted successfully'], 200);
    }
}
