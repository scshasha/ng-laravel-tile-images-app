<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Image;

class ImageController extends Controller
{
    /**
     * Show: Gets images.
     * 
     * @access public
     * @return Illuminate\Http\Response
     */
    public function show()
    {
        /**
         * @var App\Image $images
         */
        $images = Image::all();

        
        return response()->json($images);

    }

    /**
     * Store: Save image.
     * 
     * @access public
     * @param Illuminate\Http\Request $request
     * @return Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // Check if we have an image to proceed with.

        // return response()->json(['res' => $request->file("file")]);


        if ($request->hasFile('file')) {

            $image = new Image();

            $file = $request->file("file");
            $ext   = $file->getClientOriginalExtension();

            $filename    = sprintf('%s%s.%s',date('His'), time(), strtolower($ext));
            $file->move('uploads/'.date("Y-m-d")."/", $filename);


             // = str_replace(".{$ext}", "", $file->getOriginalName());
            $image->name = $filename;
            $image->image = sprintf('uploads/%s/%s', date("Y-m-d"), $filename);
            $image->posY = '';
            $image->posX = '';
            $image->scale = '';

            /**
             * TODO: Save to the database ?
             * ============================
             * 'scale','posY','posX'
             */
            $image->save();

            return response()->json([
                "message" => "Image uploaded succesfully!"
            ]);

        }


        return response()->json([
            "message" => "There was no image selected!"
        ]);

    }
}
