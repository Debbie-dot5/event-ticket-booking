import { useState } from "react";



const ImageUploader = ({ onUpload }) => {

  const [imageUrl, setImageUrl] = useState("");

  const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;


  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset); 

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        { method: "POST", body: formData }
      );

      const data = await response.json();
      setImageUrl(data.secure_url);
      onUpload(data.secure_url);
      console.log("Cloudinary upload response:", data);
    } catch (error) {
      console.error("Cloudinary upload error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Uploaded Avatar"
          className="w-[240px] h-[240px] object-cover rounded-[32px]"
        />
      ) : (
        <label>
        <div  className="text-white h-[242px] w-[240px] flex justify-center items-center gap-[16px] flex-col border-4 border-[#24A0B5]/50 bg-[#0E464F] rounded-[32px] cursor-pointer">
          <img src="/cloud.svg" alt="Upload icon" />
          <p className="text-base text-center px-[12px]">
            Drag & drop or click to upload
          </p>
        </div>

        <input type="file" name="avatarUrl" accept="image/*"  className="hidden" onChange={handleFileChange}  />
        </label>
      )}

      
    </div>
  );
};

export default ImageUploader;
