import cardIcon from "/entrepreneurCommunity/cardIcon.png";
import arrow from "/entrepreneurCommunity/arrow.png";
import buttonIcon from "/entrepreneurCommunity/businessDevelop.png";

/* eslint-disable @typescript-eslint/no-explicit-any */
const BusinessDevelopmentEntrepreneurCommunityCard = ({ cardData }: any) => {
  return (
    <div className="relative h-[302px] w-[463px] rounded-[30px] bg-gradient-to-r from-accent to-secondary-dark p-4 shadow-lg">
      <div className="absolute -top-6 right-0">
        <div className="relative h-[302px] w-[463px] rounded-[30px] bg-gradient-to-r from-accent to-secondary-dark p-4 shadow-lg">
          <div className={`${cardData?.color} absolute -top-6 left-0 h-[302px] w-[463px] rounded-[30px] p-4 shadow-lg`}>
            <div className="flex h-10 w-10 items-start justify-center rounded-full bg-background p-2">
              <img src={cardIcon} alt="cardIcon" className="h-5 w-5" />
            </div>

            <div className="mt-11">
              <button className="flex items-center justify-between rounded-full bg-accent px-3 py-1">
                Team Lead
                <img src={buttonIcon} alt="buttonIcon" className="h-5 w-5" />
              </button>
              <div className="flex items-end justify-between">
                <h2 className="text-lg font-semibold">{cardData?.title}</h2>
                <h2 className="text-xl font-semibold">{cardData?.teams} Teams</h2>
                <p className="flex items-center justify-items-end gap-x-1 text-sm font-medium text-green-400">
                  {cardData?.percentage}
                  <img src={arrow} alt="arrowIcon" className="h-4 w-4 rotate-180" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopmentEntrepreneurCommunityCard;
