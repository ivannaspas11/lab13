export default function GalleryControls({
  onPrev,
  onNext,
  isPrevDisabled,
  isNextDisabled,
}) {
  return (
    <div
      style={{
        marginTop: "10px",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <button onClick={onPrev} disabled={isPrevDisabled}>
        Попереднє
      </button>
      <button onClick={onNext} disabled={isNextDisabled}>
        Наступне
      </button>
    </div>
  );
}
