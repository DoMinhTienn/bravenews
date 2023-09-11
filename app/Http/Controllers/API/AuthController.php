<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravolt\Avatar\Avatar;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum', ['except' => ['login', 'register']]);
    }
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string|',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('username', 'password');
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json([
                    'access_token' => $user->createToken('ApiToken')->plainTextToken,
                    'type' => 'bearer',
            ]);
        }

        return response()->json([
            'message' => 'Invalid credentials',
        ], 401);
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'username' => 'required|string|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);
        $avatar = new Avatar;
        $avatarSvg = $avatar->create($request->name)->toSvg();
        
        $response = Cloudinary::upload('data:image/svg+xml,' . $avatarSvg, [
            'public_id' => $request->username,
            'resource_type' => 'image', // Chọn kiểu tài nguyên là ảnh
        ])->getSecurePath();

        // $response = cloudinary()->upload($request->file($avatarBase64)->getRealPath())->getSecurePath();

        $user = User::create([
            'name' => $request->name,
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'role' => 0,
            'avatar_path' => $response,
        ]);

        return response()->json([
            'message' => 'User created successfully',
            'user' => $user
        ]);
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

    public function uploadAvatar(Request $request){
        if(! $request->hasFile('file')){
            return response()->json([
                'message' => 'File is required'
            ]);
        }
        $user = Auth::user();
        $username = $user->username;
        $response = cloudinary()->upload($request->file('file')->getRealPath(), [
            'public_id' => $username,
        ])->getSecurePath();
        
        $user->avatar_path = $response;
        $user->save();
        return response()->json([
            'message' => 'upload successfully',
        ]);
    }

    public function update(Request $request){
        
    }
}
