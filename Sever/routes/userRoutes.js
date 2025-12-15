import express from 'express';

import { 
    getUserProfile, 
    updateUserProfile,
    followUser,
    unfollowUser 
} from '../controller/userController.js';

const router = express.Router();

// Get user profile
router.get('/:id', getUserProfile);
router.put('/:id', updateUserProfile);
router.post('/:id/follow', followUser);
router.post('/:id/unfollow', unfollowUser);

export default router;