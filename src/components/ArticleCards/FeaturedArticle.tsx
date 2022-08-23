import { IArticleHeaderData } from "../../shared/interfaces";
import classes from "./ArticleCard.module.scss";
import { combineClasses, transformImagePaths, transformPath } from "../../utils/utils";
import LinkTo from "../LinkTo";
import { generateRandomAvtar } from "../../constants/appConstants";
import { useRouter } from "next/router";

interface IProp {
    article: IArticleHeaderData;
    path: string;
}


const FeaturedArticle = ({ article, path }: IProp) => {
    const router = useRouter();
    const gotoPath = (e:any) => {
        e.preventDefault()
        router.push(transformPath(path))
      }
    return (
        <>
            <div onClick={gotoPath} className={combineClasses(classes.featured_article,
                'md:border-l-[5px] border-b-[5px] md:border-b-0 border-blue-500 dark:bg-slate-800 dark:text-white dark:drop-shadow-lg cursor-pointer')}>
                <div className={'w-full md:w-[55%] lg:px-[50px] px-[15px] lg:py-[40px] py-[20px]'}>
                    <div className={"mt-0 mb-[10px] flex items-center"}>
                        <div className={classes.author}>
                            <div className={combineClasses(classes.author_img, 'flex items-center justify-center')}>
                                {
                                    article.author.profilePic ? 
                                        <img src={article.author.profilePic} alt={article.author.name} /> : 
                                        <p className="text-center font-medium text-[18px] text-white">{article.author.name[0]}</p>
                                }
                            </div>
                            <p className={combineClasses(classes.author_name, 'text-[14px] md:text-[16px] my-0 font-medium')}>
                                {article.author.name}
                            </p>
                        </div>
                        {
                            article.category && <>
                                <p className="text-[14px] md:text-[16px] px-2 font-normal">in</p>
                                <p className={combineClasses(classes.article_card__category, "font-medium text-[14px] md:text-[16px]")}>
                                    <LinkTo href={"/blog?category=" + article.category}>
                                        {article.category}
                                    </LinkTo>
                                </p>
                            </>
                        }
                    </div>
                    <LinkTo href={transformPath(path)} passHref>
                        <h1 className={combineClasses(classes.featured_article__title, "text-[24px] font-bold mt-0 mb-[10px]")} >
                            {article.articleTitle}
                        </h1>
                    </LinkTo>
                    <p className={combineClasses(classes.featured_article__intro, "text-[14px] font-regular mt-0 mb-[10px]")}>
                        {article.shortIntro.slice(0, 150)} ...
                    </p>

                    <div className={classes.featured_article__tags}>
                        {
                            article.tags.split(',').map((each, i) => (
                                <span key={i} className="text-xs font-normal mr-3" >#{each}</span>
                            ))
                        }
                    </div>
                    <p className={combineClasses(classes.featured_article__date, "font-normal text-xs pt-3 mb-0")}>{article.date}</p>
                </div>
                <div className={combineClasses(classes.featured_article__image, 'rounded-sm overflow-hidden')} >
                    {/* style={{ background: `url(${transformImagePaths(article.thumbnail)})` }} */}
                    <img 
                        src={transformImagePaths(article.thumbnail)} alt={article.articleTitle} 
                        className="w-full h-full object-cover" />
                </div>
            </div>
        </>
    )
}

export default FeaturedArticle