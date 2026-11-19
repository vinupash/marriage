type TourCallback = () => void;

let filterTourCallback: TourCallback | null = null;

export const registerFilterTour = (callback: TourCallback) => {
  filterTourCallback = callback;

  return () => {
    if (filterTourCallback === callback) {
      filterTourCallback = null;
    }
  };
};

export const notifyTabsTourEnded = () => {
  filterTourCallback?.();
};
