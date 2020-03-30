import { Router } from "express";
import ArticleController from "../controllers/article.controller";

const controller = new ArticleController();

const router = Router();
      router.get        ('/articles',      controller.fetchAll      );
      router.post       ('/articles',      controller.addArticle    );
      router.get        ('/articles/:id',  controller.getArticle    );
      router.put        ('/articles/:id',  controller.updateArticle );
      router.delete     ('/article/:id',   controller.deleteArticle );
      export { router as articleRouter };
