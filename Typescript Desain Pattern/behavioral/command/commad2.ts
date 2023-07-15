namespace Command2{
    class BlogService{
        save(){}
        update(){}
        getPost(){}
        getPosts(){}
        titleToSlug(){}
        deleteToHumanize(){}
        getMostViewPost(){}
        getFeaturedPost(){}
        getMonetizedPost(){}
    }

    interface BlogPost {
        execute(param: any): any;
    }

    class SaveBlogPost implements BlogPost{
        execute() {
            const blog = new BlogService;
            blog.titleToSlug();
            blog.update();
        }
    }

    new SaveBlogPost().execute();
}