namespace Command{
    interface BlogPost{
        execute(param: any): any;
    }

    class BlogUtility{
        static titleToSlug(){}
        static deleteToHumanize(){}
        static getMostViewPost(){}
        static getFeaturedPost(){}
        static getMonetizedPost(){}
    }

    class SaveBlogPost implements BlogPost{
        execute() {
            BlogUtility.titleToSlug()
            this.save()
        }
        protected save() {
            // menyimpan ke db
        }
    }

    class UpdateBlogPost implements BlogPost{
        execute() {
            BlogUtility.titleToSlug()
            this.update()
        }

        protected update() {
            // update ke db
        }
    }

    class GetBlogPost implements BlogPost{
        execute(singlePost: boolean) {
            BlogUtility.deleteToHumanize()
            if(singlePost){
                this.getPost()
            } else {
                this.getPosts()
            }
        }
        getPost(){} 
        getPosts(){}
    }

    new SaveBlogPost().execute();
}