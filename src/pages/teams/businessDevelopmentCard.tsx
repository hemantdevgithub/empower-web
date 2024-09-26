import { ArrowRightIcon } from "lucide-react";

const BusinessDevelopmentCard = () => {
  return (
    <div className="w-full max-w-2xl rounded-3xl bg-gray-900 p-8">
      <h2 className="mb-8 text-xl font-semibold text-white">Business Development Entrepreneur Community</h2>
      <div className="relative">
        {/* Main circular image */}
        <div className="relative mb-4 h-64 w-64 overflow-hidden rounded-full bg-gray-800">
          <img
            src="/placeholder.svg?height=256&width=256"
            alt="Smiling businessman"
            className="h-full w-full object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-gray-900 px-4 py-2">
            <p className="text-sm text-white">Business.</p>
          </div>
          <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white">
            <ArrowRightIcon className="h-4 w-4 text-gray-900" />
          </div>
        </div>

        {/* Secondary rectangular image */}
        <div className="absolute right-4 top-4 h-32 w-40 overflow-hidden rounded-2xl">
          <img
            src="/placeholder.svg?height=128&width=160"
            alt="People in a meeting"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Business Development Entrepreneurs text */}
        <div className="absolute bottom-4 left-4 rounded-full bg-blue-600 px-4 py-2">
          <p className="text-sm text-white">Business Development Entrepreneurs.</p>
        </div>

        {/* Know more button */}
        <button className="absolute bottom-4 right-4 flex items-center space-x-1 text-sm text-blue-400">
          <span>Know more</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default BusinessDevelopmentCard;
