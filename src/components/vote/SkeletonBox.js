import style from "@/styles/common/SkeletonBox.module.scss";

const SkeletonBox = () => {
  return (
    <div className={style.skeleton_container}>
      <div className={`${style.skeleton} ${style.title}`} />
      <div className={`${style.skeleton} ${style.title_medium}`} />
      <hr className={style.hr} />
      <div className={`${style.skeleton} ${style.item_box}`} />
      <div className={`${style.skeleton} ${style.item_box}`} />
      <div className={`${style.skeleton} ${style.item_box}`} />
      <div>
        <div className={`${style.skeleton} ${style.text}`} />
        <div className={`${style.skeleton} ${style.text_medium}`} />
      </div>
    </div>
  );
};

export default SkeletonBox;
