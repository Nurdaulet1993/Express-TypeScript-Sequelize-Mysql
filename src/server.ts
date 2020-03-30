import app from './app';
import sequelize from "./sequelize";
import User from "./models/user.model";
import _USERS from './data/users.json'

import Article from "./models/article.model";
import _ARTICLES from './data/articles.json';

const server = app.listen(app.get('port'), () => {
    console.log('Server starting on http://localhost:' + app.get('port'));

    sequelize.authenticate().then( async () => {
        try {
            sequelize.sync({ force: false })
                .then(() => {
                    // Article.bulkCreate(_ARTICLES);
                    // User.bulkCreate(_USERS);
                });
        } catch (err) {
            console.log(err);
        }
    })
});
