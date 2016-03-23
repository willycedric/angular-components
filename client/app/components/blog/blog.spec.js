import {blog} from './blog';
import {blogDirective} from './blog.directive';
import template from './blog.html';
import {BlogController} from './blog.controller';

describe('Blog', () => {
  let $rootScope;
  let makeController;
  //load modules that we want to test
  //This function registers a module configuration code. 
  //It collects the configuration information which will be used when the injector is created by inject.
  //docs --> https://docs.angularjs.org/api/ngMock/function/angular.mock.module
  beforeEach(window.module(blog.name));
  // inject() is used to inject arguments of all given functions (see https://docs.angularjs.org/api/ngMock/function/angular.mock.inject)
  beforeEach(inject(_$rootScope_ => {
    $rootScope = _$rootScope_;
    makeController = (injectables) => {
      return new BlogController(injectables);
    };
  }))

  describe('module', () => {
    it('should have an appropriate name', () => {
      expect(blog.name).to.equal('blog');
    });
  });

  describe('directive', ()=> {
    let ddo;
    beforeEach(() => {
      ddo = blogDirective();
    });

    it('should have the right template', () => {
      expect(ddo.template).to.equal(template);
    });

    it('should have the right controller', () => {
      expect(ddo.controller).to.equal(BlogController);
    });

    it('should have an isolate scope', () => {
      expect(ddo.scope).to.be.an('object');
    });

    it('should use controllerAs', () => {
      expect(ddo.controllerAs).to.be.a('string');
    });
  });

  describe('controller', ()=> {
    it('should have blog posts', ()=> {
      const controller = makeController();
      expect(controller.posts).to.be.an('array');
      expect(controller.posts[0]).to.have.property('author');
      expect(controller.posts[0]).to.have.property('title');
      expect(controller.posts.length).to.equal(9);
      expect(controller.posts[0].author).to.equal('Casidy James');
    });
  });

  describe('template', ()=> {
    it('should have vm',()=>{
      expect(template).to.match(/{{\s?vm\.message\s?}}/g);
    })
  });
});
