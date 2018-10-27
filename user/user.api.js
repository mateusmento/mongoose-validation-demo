import UserModel from './user.model';

class UserAPI
{
    create(user_form, error_handler)
    {
        let user = new UserModel(user_form);
        user.save(error_handler);
    }

    find(user_match)
    {
        return UserModel.find(user_match)
    }
};
