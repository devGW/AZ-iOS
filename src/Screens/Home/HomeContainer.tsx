import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import HomeViewer from './HomeViewer';
import { LoginStackParams } from '~/@types';
import {
  getPosts,
  getDetailedPost,
  getCommnets,
  postComment,
  getMyPosts,
  getMyComments,
  getMyBookmarkPosts,
  getRatingStatus,
  getNotifications,
  getPopularPosts,
} from '~/api';
import {
  getPostsThunk,
  getPostDetailThunk,
  getCommentsThunk,
  postCommentThunk,
  getPopularPostsThunk,
} from '~/store/modules/post/thunks';
import { RootState } from '~/store/modules';
import {
  getMyRatingThunk,
  getMyCommentsThunk,
  getMyPostsThunk,
  getMyBookmarkPostsThunk,
  getNotificationsThunk,
} from '~/store/modules/user/thunks';
import { usePrevious } from '~/hooks';

interface HomeProps {
  navigation: StackNavigationProp<LoginStackParams, 'Home'>;
}

const HomeContainer = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  const {
    auth: {
      user: { id: userId },
    },
    post: {
      postList: { posts },
      postDetail: {
        comment: { commentList },
      },
      popularPosts: { posts: popularPosts },
    },
    user: { ratingForPromotion },
    loading: {
      'post/CREATE_POST_LOADING': createPostIsLoading,
      'user/LOAD_RATING_LOADING': loadRatingIsLoading,
    },
  } = useSelector((state: RootState) => state);

  const [showCreatePostToast, setShowCreatePostToast] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPopular, setIsPopular] = useState(false);

  const handleIsPopular = () => {
    isPopular ? setIsPopular(false) : setIsPopular(true);
  };

  const handleNavigateToPostWrite = () => {
    navigation.navigate('PostWrite');
  };

  const loadPosts = () => {
    setIsLoading(true);
    const config = {
      ...getPosts,
      currentPage: 1,
      size: 200,
    };
    const option = {
      ...getPopularPosts,
      currentPage: 1,
      size: 200,
    };
    dispatch(getPopularPostsThunk(option));
    dispatch(getPostsThunk(config));
    setIsLoading(false);
  };
  const loadRating = async () => {
    const config = {
      ...getRatingStatus,
      userId,
    };
    await dispatch(getMyRatingThunk(config));
  };
  const loadMyComments = () => {
    const config = {
      ...getMyComments,
      userId,
    };
    dispatch(getMyCommentsThunk(config));
  };
  const loadMyPosts = () => {
    const config = {
      ...getMyPosts,
      userId,
    };
    dispatch(getMyPostsThunk(config));
  };
  const loadBookmark = () => {
    const config = {
      ...getMyBookmarkPosts,
      userId,
    };
    dispatch(getMyBookmarkPostsThunk(config));
  };
  const loadNotifications = () => {
    const config = {
      ...getNotifications,
      userId,
    };
    dispatch(getNotificationsThunk(config));
  };

  const handleNavigateToPostDeatil = async (postId: number) => {
    const config = {
      ...getCommnets,
      postId,
      currentPage: 1,
      size: 200,
    };
    const option = {
      ...getDetailedPost,
      postId,
    };
    await dispatch(getCommentsThunk(config));
    await dispatch(getPostDetailThunk(option));

    const handlePostCommnet = (postId: number, comment: string) => {
      const config = {
        ...postComment,
        comment,
        postId,
      };
      dispatch(postCommentThunk(config));
    };
    navigation.navigate('PostDetail', {
      handlePostCommnet,
    });
  };

  const prevState = usePrevious({ posts, commentList });

  useEffect(() => {
    if (
      JSON.stringify(prevState?.posts) !== JSON.stringify(posts) &&
      JSON.stringify(prevState?.commentList) !== JSON.stringify(commentList)
    ) {
      loadRating();
    }
  }, [posts, commentList]);

  useEffect(() => {
    if (JSON.stringify(prevState?.posts) !== JSON.stringify(posts)) {
      loadPosts();
    }
  }, [posts]);

  useEffect(() => {
    loadMyComments();
    loadMyPosts();
    loadBookmark();
    loadNotifications();
  }, []);

  useEffect(() => {
    loadMyPosts();
  }, [posts]);
  useEffect(() => {
    loadMyComments();
  }, [commentList]);
  useEffect(() => {
    if (createPostIsLoading) {
      setTimeout(() => {
        setShowCreatePostToast(true);
      }, 200);
      setTimeout(() => {
        setShowCreatePostToast(false);
      }, 3000);
    }
  }, [createPostIsLoading]);

  return (
    <HomeViewer
      loadRatingIsLoading={loadRatingIsLoading}
      posts={posts}
      popularPosts={popularPosts}
      handleNavigateToPostWrite={handleNavigateToPostWrite}
      handleNavigateToPostDeatil={handleNavigateToPostDeatil}
      showCreatePostToast={showCreatePostToast}
      ratingForPromotion={ratingForPromotion}
      loadPosts={loadPosts}
      isLoading={isLoading}
      isPopular={isPopular}
      handleIsPopular={handleIsPopular}
    />
  );
};

export default HomeContainer;
