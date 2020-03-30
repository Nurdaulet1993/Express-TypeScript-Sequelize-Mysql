import { Request, Response, NextFunction } from "express";
import Article from "../models/article.model";

export default class ArticleController {

    async fetchAll(req: Request, res: Response) {
        Article.findAll()
            .then(articles => {
                res.status(200).send(articles);
            })
            .catch(err => {
              console.log(err);
            })
    }

    async addArticle(req: Request, res: Response) {
        Article.create({
            title:          req.body.title,
            description:    req.body.description,
            imgUrl:         req.body.imgUrl,
            body:           req.body.body
        })
    }

    async getArticle(req: Request, res: Response) {
        const id = req.params.id;
        Article.findByPk(id)
            .then(article => {
                if(!article) {
                    res.json({message: 'There is no article with id = ' + id})
                }
                res.status(200).send(article);
            })
            .catch(err => {
                console.log(err);
            });
    }

    async updateArticle(req: Request, res: Response) {
        const id = req.params.id;
        Article.update(req.body, {
            where: {
                id: id
            }
        })
            .then(result => {
                res.send(200).json({message: 'Article successfully updated', article: result});
            })
            .catch(err => {
               console.log(err);
            });
    }

    async deleteArticle(req: Request, res: Response) {
        const id = req.params.id;
        Article.findByPk(id)
            .then(article => {
                if(!article) {
                    res.status(404).json({message: ' There is no article with id = ' + id})
                }
                article?.destroy()
            })
            .then(() => res.status(200).json({message: 'Article successfully deleted'}))
            .catch(err => console.log(err));
    }
}
