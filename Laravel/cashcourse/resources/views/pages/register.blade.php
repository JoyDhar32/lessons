@extends('layout')

@section('content')

<div class="bg-gray-100 dark:bg-gray-900 flex items-center justify-center min-h-screen">
<div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
    <div class="mb-4 text-center">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">Register</h1>
        <p class="text-gray-500 dark:text-gray-400">Create an account to get started</p>
    </div>
    <form method="POST" action="{{route('register')}}" class="space-y-4">

        @csrf

        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
            <input type="text" name="name" id="name" value="{{ old('name') }}" required autofocus autocomplete="name" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
            <input type="email" name="email" id="email" value="{{ old('email') }}" required autocomplete="email" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>
        
        <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
            <input type="password" name="password" id="password" required autocomplete="new-password" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="mb-4">
            <label for="password_confirmation" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Confirm Password</label>
            <input type="password" name="password_confirmation" id="password_confirmation" required autocomplete="new-password" class="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
        </div>

        <div class="mt-6">
            <button type="submit" class="w-full bg-indigo-600 text-white px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm">Register</button>
        </div>
    </form>
</div>
</div>
@endsection