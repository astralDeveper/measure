import { useId, useState } from "react";
// import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
// import { storage } from "../../firebase/firebase";

export default function FileUploadBtn({ name, data, setData }) {
  // const [isUploading, setIsUploading] = useState(false);
  // const [image, setImage] = useState(data[name]);
  const image = data[name]
  const id = useId();

  const handleUpload = (e) => {
    const file = e.target.files[0];
    setData((s) => ({ ...s, [name]: file}))
    // setImage(file)

    // setIsUploading(true);
    // const storageRef = ref(storage, file.name);
    // const uploadTask = uploadBytesResumable(storageRef, file);
    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    //     switch (snapshot.state) {
    //       case "paused":
    //         console.log(`Upload is paused ${progress}`);
    //         break;
    //       case "running":
    //         console.log(`Upload is running ${progress}`);
    //         break;
    //       default:
    //         break;
    //     }
    //   },
    //   (error) => { console.log(error); },
    //   () => {
    //     getDownloadURL(storageRef).then((downloadUrl) => {
    //       console.info("Image uploaded to successfully");

    //       setData((s) => ({ ...s, [name]: downloadUrl }))
    //       setImage(downloadUrl);
    //       setIsUploading(false);
    //     });
    //   });
  };

  let labelText = ''

  // if (isUploading) labelText = 'Uploading...';
  // else
  if (image) labelText = 'Photo added';
  else labelText = 'Add photo';

  return (
    <>
      <div className="file-upload-btn">
        <label htmlFor={`${id}upload-btn`}>{labelText}</label>
        <input type="file" name="" id={`${id}upload-btn`} onChange={handleUpload} accept="image/*" />
      </div>
      {image && image instanceof File && <img src={URL.createObjectURL(image)} alt="" style={{ display: 'block', maxWidth: '500px', margin: '0 auto' }} className="w100" />}
    </>
  )
}
