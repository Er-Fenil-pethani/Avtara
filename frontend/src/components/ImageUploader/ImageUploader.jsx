import {
  uploadImage,
} from "../../services/upload.service";

function ImageUploader({
  onSuccess,
}) {
  const handleUpload =
    async (e) => {
      try {
        const file =
          e.target.files[0];

        const result =
          await uploadImage(
            file
          );

        onSuccess(
          result.imageUrl
        );
      } catch (
        error
      ) {
        console.error(
          error
        );
      }
    };

  return (
    <input
      type="file"
      onChange={
        handleUpload
      }
    />
  );
}

export default ImageUploader;