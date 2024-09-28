const AddServiceProvider = () => {
  return (
    <div className="space-y-5 rounded-xl bg-accent p-8">
      <h1 className="text-xl font-medium">Service Provider Details</h1>
      <div className="grid grid-cols-3 gap-5">
        {Array.from({
          length: 6,
        }).map((_x, i) => (
          <div key={i} className="space-y-3 overflow-hidden rounded-3xl bg-background p-3">
            <div className="relative">
              <img
                src="https://www.yourtango.com/sites/default/files/image_blog/job-seeker-with-ten-years-experience-can-not-get-hired-despite-sending-out-five-hundred-applications.png"
                className="h-[150px] w-full rounded-3xl object-cover"
                alt=""
              />
              <h3 className="absolute bottom-4 right-3 text-xl">Job Seekers</h3>
            </div>
            <div className="flex justify-center">
              <button className="rounded-md bg-secondary-dark px-10 py-2">Upload</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddServiceProvider;
