# Image-Container
Image container implementation in a cool and simple way the change of the image based on icons

Image Container Component Documentation
The Image Container Component is a JavaScript code that allows users to upload, view, and delete an image. The code uses JavaScript DOM manipulation to create a functional image container with various features such as an image preview, image upload, image delete, and image cancel.

Dependencies
The Image Container Component depends on the showConfirmationModal() function to run. The function is not included in this code, so it is required to be implemented for the Image Container Component to work properly.
This modal is include in this repo but fill free to implement your own. In this case the one implemented is wsing sweetAlert2, so, you will need all components than are required to make it run.

Code Overview
The code starts by selecting all elements with the class .image-container using the querySelectorAll() method. The selected elements are then looped through using forEach() and the variables imageElement, imageFile, pencilIcon, trashIcon, cancelIcon, and originalImageURL are defined for each iteration.

The originalImageURL is set to the source of the imageElement, and if there is no URL, the trashIcon is hidden.

Each of the icons (pencil, trash, and cancel) have click event listeners added to them. The pencil icon, when clicked, triggers the click event of the imageFile input, allowing the user to select an image file. The change event of the imageFile input is then listened to, and if the selected file is a valid image file (jpg, png, or jpeg), the image's source is set to the URL of the file and the cancelIcon is shown. The trashIcon is hidden in this scenario.

When the trashIcon is clicked, the showConfirmationModal() function is called and a callback function is passed to it. The callback function retrieves the value of the where-to-go attribute of the trashIcon, and if the value is either a valid URL or a valid function name, it is executed. If the value of the where-to-go attribute is a function, it is executed using eval() and the results of the function are logged to the console. If the value of the where-to-go attribute is a URL, the page is redirected to the URL. If the value of the where-to-go attribute is neither a URL nor a function, an error message is logged to the console.

Finally, when the cancelIcon is clicked, the source of the imageElement is set back to the original image URL, the cancelIcon is hidden, and if there is an original image URL, the trashIcon is shown.

Conclusion
The Image Container Component is a functional and customizable solution for adding image upload, view, and delete functionality to a web page. The code can be easily adapted to fit the specific requirements of a project and the showConfirmationModal() function can be implemented to provide a confirmation prompt to the user before they delete an image.

#How to used it in ASP.Net 

## Give it some styles
<style>
    .image-container {
        position: relative;
        width: 200px;
        height: 125px;
    }

    .overlay {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
        width: 30px;
        color: #f1f1f1;
        transition: .5s ease;
        height: 100%;
        visibility: visible;
        opacity: 1;
        background-color: rgba(255, 255, 255, 0.8);
    }
 
</style>

## use the code
                <div class="image-container">
                    <img class="image-element" src="@Model.Imagen"  >
                    <input type="file" asp-for="ImageFile" class="image-file" accept=".jpg, .jpeg, .png" style="display:none;">
                    <div class="overlay">
                        <i class="pencil-icon fas fa-pencil-alt"></i>
                        
                        <i class="trash-icon fas fa-trash" where-to-go="simpleFunction(1)"></i>

                        <i class="cancel-icon fas fa-times"></i>
                    </div>
                </div> 

Add the resourses 
