<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Models\Category;
use App\Http\Resources\Category as CategoryResource;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        $arr = [
            'status' => true,
            'message' => "Category List",
            'data' => CategoryResource::collection($categories)
        ];
        return response()->json($arr, 200);
    }
    public function create()
    {
    }
   
    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Validate error!!!',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $categories = Category::create($input);
        $arr = [
            'status' => true,
            'message' => "Category saved successfully.",
            'data' => new CategoryResource($categories)
        ];
        return response()->json($arr, 201);
    }
    public function show($id)
    {
        $category = Category::find($id);
        if (is_null($category)) {
            $arr = [
                'success' => false,
                'message' => 'This category does not exist',
                'dara' => []
            ];
            return response()->json($arr, 200);
        }
        $arr = [
            'status' => true,
            'message' => "Category detail",
            'data' => new CategoryResource($category)
        ];
        return response()->json($arr, 201);
    }
    public function edit($id)
    {
    }
    public function update(Request $request, Category $category)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required'
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Validate error!!!',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $category->name = $input['name'];
 
        $category->save();
        $arr = [
            'status' => true,
            'message' => 'Category updated successfully.',
            'data' => new CategoryResource($category)
        ];
        return response()->json($arr, 200);
    }
    public function destroy(Category $category)
    {
        $category->delete();
        $arr = [
            'status' => true,
            'message' => 'Category has been deleted.',
            'data' => [],
        ];
        return response()->json($arr, 200);
    }
}
