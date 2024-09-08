import React from "react";

const FormComment = () => {
  return (
    <div id="respond" className="mt-8 px-10 space-y-5">
      <h3 id="reply-title" className="text-4xl font-semibold">
        Leave a Comment
      </h3>
      <form action="" method="post" id="ast-commentform" className="space-y-5">
        <p className="text-sm text-gray-600">
          <span id="email-notes">
            Your email address will not be published.
          </span>
          <span>
            Required fields are marked <span className="required">*</span>
          </span>
        </p>
        <fieldset>
          <div>
            <label htmlFor="comment" className="sr-only">
              Type here..
            </label>
            <textarea
              id="comment"
              name="comment"
              placeholder="Type here.."
              cols={45}
              rows={8}
              aria-required="true"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </fieldset>
        <div className="flex space-x-5">
          <div className="flex-1">
            <label htmlFor="author" className="sr-only">
              Name*
            </label>
            <input
              id="author"
              name="author"
              type="text"
              placeholder="Name*"
              size={30}
              aria-required="true"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="email" className="sr-only">
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email*"
              size={30}
              aria-required="true"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="url" className="sr-only">
              Website
            </label>
            <input
              id="url_author"
              name="url_author"
              type="text"
              placeholder="Website"
              size={30}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <p className="flex items-center space-x-2">
          <input
            id="wp-comment-cookies-consent"
            name="wp-comment-cookies-consent"
            type="checkbox"
            value="yes"
            className="mr-2"
          />
          <label htmlFor="wp-comment-cookies-consent">
            Save my name, email, and website in this browser for the next time I
            comment.
          </label>
        </p>
        <p>
          <input
            name="submit"
            type="submit"
            id="submit"
            className="text-xl px-8 py-4 bg-[#ffcd57] text-black rounded-[30px] hover:bg-[#bb9335dc] duration-300 cursor-pointer"
            value="Post Comment"
          />
        </p>
      </form>
    </div>
  );
};

export default FormComment;
