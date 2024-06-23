<?php

namespace App\Http\Controllers;

use App\Models\register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('pages.register');
    }

    public function store(Request $request){
       $fields= $request->validate([
            'name' => ['required','max:255'],
            'email' => ['required','max:255','email', 'unique:registers'],
            'password' => ['required','min:3','max:255', 'confirmed'],
        ]);
         Register::create($fields);
        dd("ok");
    }

}