<?php

namespace App\Http\Controllers;

use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class GoogleAuthController extends Controller
{
  
    public function redirect()
    {
        return Socialite::driver('google')->stateless()->redirect();
    }

  
    public function callbackGoogle(Request $request)
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();

            if (!$googleUser) {
                return $this->handleFailure($request, 'Google login failed');
            }

            $user = User::where('google_id', $googleUser->getId())
                        ->orWhere('email', $googleUser->getEmail())
                        ->first();

            if ($user) {
                if (empty($user->profile_photo) && $googleUser->getAvatar()) {
                    $user->profile_photo = $googleUser->getAvatar();
                    $user->save();
                }
            } else {
                $user = User::create([
                    'name'          => $googleUser->getName(),
                    'email'         => $googleUser->getEmail(),
                    'google_id'     => $googleUser->getId(),
                    'password'      => bcrypt(Str::random(16)), // random password
                    'profile_photo' => $googleUser->getAvatar(),
                ]);
            }

            Auth::login($user);

            if ($request->expectsJson()) {
                return response()->json([
                    'user'  => $user,
                    'token' => $user->createToken('auth_token')->plainTextToken,
                ]);
            }

            return redirect('/');

        } catch (\Throwable $th) {
            \Log::error($th); 
            return $this->handleFailure($request, 'Something went wrong. Please try again.');
        }
    }

   
    public function checkLogin(Request $request)
    {
        if (!Auth::check()) {
            if ($request->expectsJson()) {
                return response()->json(['error' => 'You must log in first'], 401);
            }
            return redirect()->to('/login')->with('error', 'You must log in first');
        }

        return redirect()->to('/');
    }

    
    protected function handleFailure(Request $request, $message)
    {
        if ($request->expectsJson()) {
            return response()->json(['error' => $message], 401);
        }
        return redirect()->to('/login')->with('error', $message);
    }
}
