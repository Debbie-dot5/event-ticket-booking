import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImageUploader from "./ImageUploader";
import { toast, ToastContainer } from "react-toastify";



const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
    avatarUrl: null,
  });

  const navigate = useNavigate()
  const [errors, setErrors] = useState({});


    useEffect(() => {
      const savedFormData = JSON.parse(localStorage.getItem("formData"));
      if (savedFormData) {
        setFormData(savedFormData);
      }
    }, []);


    useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);








  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (imageUrl) => {
    setFormData((prev) => ({ ...prev, avatarUrl: imageUrl }));
    
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.avatarUrl) {  // Fix: Properly checking if image is missing
      newErrors.avatarUrl = "Please upload a profile photo";
      toast.error("Please upload a profile photo");
    }

if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid email";
      
    }

    if (!formData.comment) {
      newErrors.comment = "Add comment";
    }
   
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
        navigate("/got-ticket", { state: formData });
        
        
      console.log("Form Submitted:", formData);

      
    } else{
      console.log("Form has errors:", errors);
    }
  };

  return (

    <form onSubmit={handleSubmit} 
    className="flex flex-col gap-[12px] w-full mx-auto">
          <ToastContainer theme="dark"/>


      
        <div className="flex flex-col gap-[24px] md:gap-[32px] p-[16px] md:p-[24px] justify-between items-start self-stretch rounded-[32px] bg-[#08252B] border border-[#0E464F] mt-[46px]  mx-auto w-full md:max-w-[700px]">
        <h2 className=" text-[#FFF] flex justify-between items-center text-[#FFF] font-[JejuMyeongjo] text-[24px] md:text-[32px] font-normal self-stretch text-start">
            Attendee Details <span className="text-base">Step 1/3</span>
        </h2>
        <hr className="relative h-[4px] self-stretch bg-[#07373F] before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:w-[60%] before:bg-[#24A0B5] before:rounded-full" />


        {/* Profile Image Upload */}
        <div className="flex flex-col gap-[32px] w-full items-center p-[16px] md:px-[24px] pt-[24px] pb-[48px] rounded-[24px] border border-[#07373F] bg-[#052228]">
        
          <p className="w-full text-base text-white text-left">Upload Profile Photo</p>
          <div className="bg-[#000000]/20 w-full">
          <ImageUploader onUpload={handleImageUpload} />

          </div>
        </div>

        <hr className="h-[4px] self-stretch bg-[#07373F]" />

        {/* Form Fields with div, but changed to form*/}
        <div className="flex flex-col gap-[12px] w-full">
        <label htmlFor="name" className="text-[#FAFAFA]">
        Enter your name
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
         
           className="w-full  p-[12px] text-white  border  border-[#07373F] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#24A0B5] focus:ring-opacity-50"
        />
  {errors.name && (
    <p className="text-[#ff4d4d]" aria-live="assertive">
       {errors.name}
    </p>
  )}  

      </label>

     <label htmlFor="email"  className="text-[#FAFAFA]">
        Enter your email
        <input
          type="email"
          name="email"
          id="email"
          placeholder="hello@avioflagos.io"
          value={formData.email}
          onChange={handleChange}
           className="w-full  p-[12px] text-white  border  border-[#07373F] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#24A0B5] focus:ring-opacity-50"
        />
         
         {errors.email && (
    <p className="text-[#ff4d4d]" aria-live="assertive">
       {errors.email}
    </p>
  )}  
      
  </label>

      <label htmlFor="comment"  className="text-[#FAFAFA]">
        Special request?
        <textarea
          type="text"
          name="comment"
          id="comment"
          value={formData.comment}
          onChange={handleChange}
        
           className="w-full  p-[12px] text-white  border  border-[#07373F] rounded-[12px] focus:outline-none focus:ring-2 focus:ring-[#24A0B5] focus:ring-opacity-50"
        />

{errors.comment && (
    <p className="text-[#ff4d4d]" aria-live="assertive">
       {errors.comment}
    </p>
  )}  


      </label>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-[12px] w-full ">
        <Link className="w-full " to="/">
            <button type="button" className="border border-[#24A0B5] text-[#24A0B5] w-full px-[16px] py-[10px] rounded-[8px] cursor-pointer hover">
                Back
            </button>
        
        </Link>


            
            <button type="submit"  className="w-full bg-[#24A0B5] px-[16px] py-[10px] text-white rounded-[8px] cursor-pointer">
                Get My Free Ticket
            </button>
           
            </div>


      

      
    

        

    </div>
    </form>
  );
};

export default Form;
