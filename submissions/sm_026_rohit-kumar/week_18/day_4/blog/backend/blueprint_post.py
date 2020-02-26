from flask import Blueprint, request, jsonify
from db_helper import connect, insert, select_one, select_all, delete_helper
import jwt


post = Blueprint('post', __name__)

# write routes here
@post.route('/create', methods=['POST'])
def create():
    category_id = request.json['category_id']
    heading     = request.json['heading']
    body        = request.json['body']
    token       = request.json['token']
    user_id     = 0

    try:
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        user_id = decoded['user_id']
    except Exception:
        return jsonify({'result':'failure', 'user': 'invalid'})

    query = '''INSERT INTO `blog` (`category_id`, `user_id`, `heading`, `body`, `created_on`)
               VALUES (%s, %s, %s, %s, CURDATE())
            '''
    arguments = [category_id, user_id, heading, body]
    result = insert(query, arguments)
    return jsonify(result)

@post.route('/category')
def get_all_category():
    query = 'SELECT * FROM `category` ORDER BY `category` ASC'
    result = select_all(query, [])
    return jsonify(result)

@post.route('/blogs', methods=['GET', 'POST'])
def get_all_blogs():
    if request.method == 'GET':
        query = 'SELECT * FROM `blog`'
        result = select_all(query, [])
        return jsonify(result)
    elif request.method == 'POST':
        n = int(request.json['n'])
        query = "SELECT * FROM `blog` ORDER BY `created_on` LIMIT %s"
        result = select_all(query, [n])
        return jsonify(result)


@post.route('/blogs/<int:blog_id>')
def get_blog_by_id(blog_id):
    query = 'SELECT * FROM `blog` WHERE `blog_id` = %s'
    result = select_one(query, [blog_id])
    return jsonify(result)


@post.route('/comments', methods=['POST'])
def post_comment():
    blog_id = request.json['blog_id']
    comment = request.json['comment']
    token = request.json['token']
    user_id = 0

    try:
        decoded = jwt.decode(token, 'secret', algorithms=['HS256'])
        user_id = decoded['user_id']
    except Exception:
        return jsonify({'result':'failure', 'user': 'invalid'})


    query = '''INSERT INTO `comment` (blog_id, user_id, commented_on, comment)
               VALUES (%s, %s, CURDATE(), %s)
            '''
    arguments = [blog_id, user_id, comment]
    result = insert(query, arguments)
    return jsonify(result)



@post.route('/comments/<int:blog_id>')
def get_comments_by_blog_id(blog_id):
    query = 'SELECT `comment` FROM `comment` WHERE `blog_id` = %s'
    result = select_all(query, [blog_id])
    return jsonify(result)




@post.route('/delete')
def delete():
    pass

@post.route('/edit')
def edit():
    pass

