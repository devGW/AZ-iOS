(this.webpackJsonp = this.webpackJsonp || []).push([
  [0],
  {
    101: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.reset = t.logout = t.postLoginRequestAsync = t.createAccountRequestAsync = t.RESET = t.LOGOUT = t.POST_LOGIN_FAILURE = t.POST_LOGIN_SUCCESS = t.POST_LOGIN = t.CREATE_ACCOUNT_FAILURE = t.CREATE_ACCOUNT_SUCCESS = t.CREATE_ACCOUNT = void 0);
      var r = n(54);
      t.CREATE_ACCOUNT = 'auth/CREATE_ACCOUNT';
      t.CREATE_ACCOUNT_SUCCESS = 'auth/CREATE_ACCOUNT_SUCCESS';
      t.CREATE_ACCOUNT_FAILURE = 'auth/CREATE_ACCOUNT_FAILURE';
      t.POST_LOGIN = 'auth/POST_LOGIN';
      t.POST_LOGIN_SUCCESS = 'auth/POST_LOGIN_SUCCESS';
      t.POST_LOGIN_FAILURE = 'auth/POST_LOGIN_FAILURE';
      t.LOGOUT = 'auth/LOGOUT';
      t.RESET = 'auth/RESET';
      var a = (0, r.createAsyncAction)(
        'auth/CREATE_ACCOUNT',
        'auth/CREATE_ACCOUNT_SUCCESS',
        'auth/CREATE_ACCOUNT_FAILURE',
      )();
      t.createAccountRequestAsync = a;
      var o = (0, r.createAsyncAction)(
        'auth/POST_LOGIN',
        'auth/POST_LOGIN_SUCCESS',
        'auth/POST_LOGIN_FAILURE',
      )();
      t.postLoginRequestAsync = o;
      var u = (0, r.createAction)('auth/LOGOUT')();
      t.logout = u;
      var i = (0, r.createAction)('auth/RESET')();
      t.reset = i;
    },
    102: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(19)),
        o = r(n(13)),
        u = r(n(522)),
        i = r(n(248));
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var c = function (e) {
        var t, n, r;
        return a.default.async(
          function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (
                    (t = (0, i.default)(e)),
                    (o.next = 3),
                    a.default.awrap(u.default.request(d({}, t)))
                  );
                case 3:
                  return (n = o.sent), (r = d({ status: n.status }, n.data)), o.abrupt('return', r);
                case 6:
                case 'end':
                  return o.stop();
              }
          },
          null,
          null,
          null,
          Promise,
        );
      };
      t.default = c;
    },
    107: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(16),
        u = r(n(152)),
        i = n(12),
        l = r(n(747)),
        d = r(n(748)),
        c = r(n(749)),
        f = function (e) {
          var t = e.heartCount,
            n = e.commentCount,
            r = e.heartWidth,
            f = e.heartHeight,
            s = e.commentWidth,
            p = e.commentHeight,
            g = e.pressLike,
            A = e.onPressHeart;
          return a.default.createElement(
            o.Rowbox,
            { width: 'auto' },
            a.default.createElement(
              u.default,
              { imgSrc: g ? l.default : d.default, onPress: g ? void 0 : A, height: r, width: f },
              a.default.createElement(o.Text, {
                text: t + '\uac1c',
                fontSize: '11px',
                fontWeight: 700,
                color: i.DARK_GREY,
                marginLeft: '5px',
              }),
            ),
            a.default.createElement(
              u.default,
              { imgSrc: c.default, marginLeft: '15px', height: s, width: p },
              a.default.createElement(o.Text, {
                text: n + '\uac1c',
                fontSize: '11px',
                fontWeight: 700,
                color: i.DARK_GREY,
                marginLeft: '5px',
              }),
            ),
          );
        };
      t.default = f;
    },
    108: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getNotificationsThunk = t.getMyRatingThunk = t.getMyBookmarkPostsThunk = t.getMyCommentsThunk = t.getMyPostsThunk = t.postVerifyNicknameThunk = t.postVerifyIdThunk = void 0);
      var a = r(n(153)),
        o = r(n(102)),
        u = n(137),
        i = (0, a.default)(u.verifyIdRequestAsync, o.default);
      t.postVerifyIdThunk = i;
      var l = (0, a.default)(u.verifyNicknameRequestAsync, o.default);
      t.postVerifyNicknameThunk = l;
      var d = (0, a.default)(u.loadMyPostsRequestAsync, o.default);
      t.getMyPostsThunk = d;
      var c = (0, a.default)(u.loadMyCommentsRequestAsync, o.default);
      t.getMyCommentsThunk = c;
      var f = (0, a.default)(u.loadMyBookmarkPostsRequestAsync, o.default);
      t.getMyBookmarkPostsThunk = f;
      var s = (0, a.default)(u.loadMyRatingRequestAsync, o.default);
      t.getMyRatingThunk = s;
      var p = (0, a.default)(u.loadNotificationsRequestAsync, o.default);
      t.getNotificationsThunk = p;
    },
    12: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.LIGHT_RED = t.DARK_GREY = t.LIGHT_GREY = t.GREY_DARK = t.LIGHT_DARK = t.GREY = t.PURPLE = t.LIGHT_PURPLE = t.WHITE = void 0);
      t.WHITE = '#ffffff';
      t.LIGHT_PURPLE = ' #E69FFF';
      t.PURPLE = '#B029DF';
      t.GREY = '#6C6C6C';
      t.LIGHT_DARK = '#5C5C5C';
      t.GREY_DARK = '#404040';
      t.LIGHT_GREY = '#999999';
      t.DARK_GREY = '#222222';
      t.LIGHT_RED = '#E25942';
    },
    136: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.loadPopularPostsRequestAsync = t.activationBookmark = t.activationLike = t.postBookmarkRequestAsync = t.postLikeRequestAsync = t.postCommentRequestAsync = t.loadCommentsRequestAsync = t.loadPostDetailRequestAsync = t.loadPostsRequestAsync = t.createPostRequestAsync = t.LOAD_POPULAR_POST_FAILURE = t.LOAD_POPULAR_POST_SUCCESS = t.LOAD_POPULAR_POST = t.ACTIVATION_LIKE = t.ACTIVATION_BOOKMARK = t.POST_BOOKMARK_FAILURE = t.POST_BOOKMARK_SUCCESS = t.POST_BOOKMARK = t.POST_LIKE_FAILURE = t.POST_LIKE_SUCCESS = t.POST_LIKE = t.POST_COMMENT_FAILURE = t.POST_COMMENT_SUCCESS = t.POST_COMMENT = t.CREATE_POST_FAILURE = t.CREATE_POST_SUCCESS = t.CREATE_POST = t.LOAD_COMMENTS_FAILURE = t.LOAD_COMMENTS_SUCCESS = t.LOAD_COMMENTS = t.LOAD_POST_DETAIL_FAILURE = t.LOAD_POST_DETAIL_SUCCESS = t.LOAD_POST_DETAIL = t.LOAD_POSTS_FAILURE = t.LOAD_POSTS_SUCCESS = t.LOAD_POSTS = void 0);
      var r = n(54);
      t.LOAD_POSTS = 'post/LOAD_POSTS';
      t.LOAD_POSTS_SUCCESS = 'post/LOAD_POSTS_SUCCESS';
      t.LOAD_POSTS_FAILURE = 'post/LOAD_POSTS_FAILURE';
      t.LOAD_POST_DETAIL = 'post/LOAD_POST_DETAIL';
      t.LOAD_POST_DETAIL_SUCCESS = 'post/LOAD_POST_DETAIL_SUCCESS';
      t.LOAD_POST_DETAIL_FAILURE = 'post/LOAD_POST_DETAIL_FAILURE';
      t.LOAD_COMMENTS = 'post/LOAD_COMMENTS';
      t.LOAD_COMMENTS_SUCCESS = 'post/LOAD_COMMENTS_SUCCESS';
      t.LOAD_COMMENTS_FAILURE = 'post/LOAD_COMMENTS_FAILURE';
      t.CREATE_POST = 'post/CREATE_POST';
      t.CREATE_POST_SUCCESS = 'post/CREATE_POST_SUCCESS';
      t.CREATE_POST_FAILURE = 'post/CREATE_POST_FAILURE';
      t.POST_COMMENT = 'post/POST_COMMENT';
      t.POST_COMMENT_SUCCESS = 'post/POST_COMMENT_SUCCESS';
      t.POST_COMMENT_FAILURE = 'post/POST_COMMENT_FAILURE';
      t.POST_LIKE = 'post/POST_LIKE';
      t.POST_LIKE_SUCCESS = 'post/POST_LIKE_SUCCESS';
      t.POST_LIKE_FAILURE = 'post/POST_LIKE_FAILURE';
      t.POST_BOOKMARK = 'post/POST_BOOKMARK';
      t.POST_BOOKMARK_SUCCESS = 'post/POST_BOOKMARK_SUCCESS';
      t.POST_BOOKMARK_FAILURE = 'post/POST_BOOKMARK_FAILURE';
      t.ACTIVATION_BOOKMARK = 'post/ACTIVATION_BOOKMARK';
      t.ACTIVATION_LIKE = 'post/ACTIVATION_LIKE';
      t.LOAD_POPULAR_POST = 'post/LOAD_POPULAR_POST';
      t.LOAD_POPULAR_POST_SUCCESS = 'post/LOAD_POPULAR_POST_SUCCESS';
      t.LOAD_POPULAR_POST_FAILURE = 'post/LOAD_POPULAR_POST_FAILURE';
      var a = (0, r.createAsyncAction)(
        'post/CREATE_POST',
        'post/CREATE_POST_SUCCESS',
        'post/CREATE_POST_FAILURE',
      )();
      t.createPostRequestAsync = a;
      var o = (0, r.createAsyncAction)(
        'post/LOAD_POSTS',
        'post/LOAD_POSTS_SUCCESS',
        'post/LOAD_POSTS_FAILURE',
      )();
      t.loadPostsRequestAsync = o;
      var u = (0, r.createAsyncAction)(
        'post/LOAD_POST_DETAIL',
        'post/LOAD_POST_DETAIL_SUCCESS',
        'post/LOAD_POST_DETAIL_FAILURE',
      )();
      t.loadPostDetailRequestAsync = u;
      var i = (0, r.createAsyncAction)(
        'post/LOAD_COMMENTS',
        'post/LOAD_COMMENTS_SUCCESS',
        'post/LOAD_COMMENTS_FAILURE',
      )();
      t.loadCommentsRequestAsync = i;
      var l = (0, r.createAsyncAction)(
        'post/POST_COMMENT',
        'post/POST_COMMENT_SUCCESS',
        'post/POST_COMMENT_FAILURE',
      )();
      t.postCommentRequestAsync = l;
      var d = (0, r.createAsyncAction)(
        'post/POST_LIKE',
        'post/POST_LIKE_SUCCESS',
        'post/POST_LIKE_FAILURE',
      )();
      t.postLikeRequestAsync = d;
      var c = (0, r.createAsyncAction)(
        'post/POST_BOOKMARK',
        'post/POST_BOOKMARK_SUCCESS',
        'post/POST_BOOKMARK_FAILURE',
      )();
      t.postBookmarkRequestAsync = c;
      var f = (0, r.createAction)('post/ACTIVATION_LIKE')();
      t.activationLike = f;
      var s = (0, r.createAction)('post/ACTIVATION_BOOKMARK')();
      t.activationBookmark = s;
      var p = (0, r.createAsyncAction)(
        'post/LOAD_POPULAR_POST',
        'post/LOAD_POPULAR_POST_SUCCESS',
        'post/LOAD_POPULAR_POST_FAILURE',
      )();
      t.loadPopularPostsRequestAsync = p;
    },
    137: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.removeBookmark = t.loadNotificationsRequestAsync = t.loadMyRatingRequestAsync = t.loadMyBookmarkPostsRequestAsync = t.loadMyCommentsRequestAsync = t.loadMyPostsRequestAsync = t.verifyNicknameRequestAsync = t.verifyIdRequestAsync = t.REMOVE_BOOKMARK = t.LOAD_NOTIFICATION_FAILURE = t.LOAD_NOTIFICATION_SUCCESS = t.LOAD_NOTIFICATION = t.LOAD_RATING_FAILURE = t.LOAD_RATING_SUCCESS = t.LOAD_RATING = t.LOAD_MY_BOOKMARK_POSTS_FAILURE = t.LOAD_MY_BOOKMARK_POSTS_SUCCESS = t.LOAD_MY_BOOKMARK_POSTS = t.LOAD_MY_COMMENTS_FAILURE = t.LOAD_MY_COMMENTS_SUCCESS = t.LOAD_MY_COMMENTS = t.LOAD_MY_POSTS_FAILURE = t.LOAD_MY_POSTS_SUCCESS = t.LOAD_MY_POSTS = t.VERIFY_NICKNAME_FAILURE = t.VERIFY_NICKNAME_SUCCESS = t.VERIFY_NICKNAME = t.VERIFY_ID_FAILURE = t.VERIFY_ID_SUCCESS = t.VERIFY_ID = void 0);
      var r = n(54);
      t.VERIFY_ID = 'auth/VERIFY_ID';
      t.VERIFY_ID_SUCCESS = 'auth/VERIFY_ID_SUCCESS';
      t.VERIFY_ID_FAILURE = 'auth/VERIFY_ID_FAILURE';
      t.VERIFY_NICKNAME = 'auth/VERIFY_NICKNAME';
      t.VERIFY_NICKNAME_SUCCESS = 'auth/VERIFY_NICKNAME_SUCCESS';
      t.VERIFY_NICKNAME_FAILURE = 'auth/VERIFY_NICKNAME_FAILURE';
      t.LOAD_MY_POSTS = 'user/LOAD_MY_POSTS';
      t.LOAD_MY_POSTS_SUCCESS = 'user/LOAD_MY_POSTS_SUCCESS';
      t.LOAD_MY_POSTS_FAILURE = 'user/LOAD_MY_POSTS_FAILURE';
      t.LOAD_MY_COMMENTS = 'user/LOAD_MY_COMMENTS';
      t.LOAD_MY_COMMENTS_SUCCESS = 'user/LOAD_MY_COMMENTS_SUCCESS';
      t.LOAD_MY_COMMENTS_FAILURE = 'user/LOAD_MY_COMMENTS_FAILURE';
      t.LOAD_MY_BOOKMARK_POSTS = 'user/LOAD_MY_BOOKMARK_POSTS';
      t.LOAD_MY_BOOKMARK_POSTS_SUCCESS = 'user/LOAD_MY_BOOKMARK_POSTS_SUCCESS';
      t.LOAD_MY_BOOKMARK_POSTS_FAILURE = 'user/LOAD_MY_BOOKMARK_POSTS_FAILURE';
      t.LOAD_RATING = 'user/LOAD_RATING';
      t.LOAD_RATING_SUCCESS = 'user/LOAD_RATING_SUCCESS';
      t.LOAD_RATING_FAILURE = 'user/LOAD_RATING_FAILURE';
      t.LOAD_NOTIFICATION = 'user/LOAD_NOTIFICATION';
      t.LOAD_NOTIFICATION_SUCCESS = 'user/LOAD_NOTIFICATION_SUCCESS';
      t.LOAD_NOTIFICATION_FAILURE = 'user/LOAD_NOTIFICATION_FAILURE';
      t.REMOVE_BOOKMARK = 'user/REMOVE_BOOKMARK';
      var a = (0, r.createAsyncAction)(
        'auth/VERIFY_ID',
        'auth/VERIFY_ID_SUCCESS',
        'auth/VERIFY_ID_FAILURE',
      )();
      t.verifyIdRequestAsync = a;
      var o = (0, r.createAsyncAction)(
        'auth/VERIFY_NICKNAME',
        'auth/VERIFY_NICKNAME_SUCCESS',
        'auth/VERIFY_NICKNAME_FAILURE',
      )();
      t.verifyNicknameRequestAsync = o;
      var u = (0, r.createAsyncAction)(
        'user/LOAD_MY_POSTS',
        'user/LOAD_MY_POSTS_SUCCESS',
        'user/LOAD_MY_POSTS_FAILURE',
      )();
      t.loadMyPostsRequestAsync = u;
      var i = (0, r.createAsyncAction)(
        'user/LOAD_MY_COMMENTS',
        'user/LOAD_MY_COMMENTS_SUCCESS',
        'user/LOAD_MY_COMMENTS_FAILURE',
      )();
      t.loadMyCommentsRequestAsync = i;
      var l = (0, r.createAsyncAction)(
        'user/LOAD_MY_BOOKMARK_POSTS',
        'user/LOAD_MY_BOOKMARK_POSTS_SUCCESS',
        'user/LOAD_MY_BOOKMARK_POSTS_FAILURE',
      )();
      t.loadMyBookmarkPostsRequestAsync = l;
      var d = (0, r.createAsyncAction)(
        'user/LOAD_RATING',
        'user/LOAD_RATING_SUCCESS',
        'user/LOAD_RATING_FAILURE',
      )();
      t.loadMyRatingRequestAsync = d;
      var c = (0, r.createAsyncAction)(
        'user/LOAD_NOTIFICATION',
        'user/LOAD_NOTIFICATION_SUCCESS',
        'user/LOAD_NOTIFICATION_FAILURE',
      )();
      t.loadNotificationsRequestAsync = c;
      var f = (0, r.createAction)('user/REMOVE_BOOKMARK')();
      t.removeBookmark = f;
    },
    152: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = n(16),
        i = r(n(8)),
        l = n(42);
      function d() {
        var e = (0, a.default)(['\n  flex-direction: ', ';\n  align-items: center;\n  ', ';\n']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = i.default.View(
          d(),
          function (e) {
            var t = e.direction;
            return null != t ? t : 'row';
          },
          l.marginStyles,
        ),
        f = function (e) {
          var t = e.children,
            n = e.imgSrc,
            r = e.marginBottom,
            a = e.marginLeft,
            i = e.marginRight,
            l = e.marginTop,
            d = e.direction,
            f = e.width,
            s = e.height,
            p = e.onPress;
          return o.default.createElement(
            c,
            { marginBottom: r, marginLeft: a, marginRight: i, marginTop: l, direction: d },
            o.default.createElement(u.Image, { imgSrc: n, width: f, height: s, onPress: p }),
            t,
          );
        };
      t.default = f;
    },
    153: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(19)),
        o = r(n(13)),
        u = r(n(26)),
        i = n(239);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var c = function (e, t) {
        return function () {
          for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
          return function (n, o) {
            var l, c, f, s, p, g, A, m;
            return a.default.async(
              function (v) {
                for (;;)
                  switch ((v.prev = v.next)) {
                    case 0:
                      return (
                        (l = e.request),
                        (c = e.success),
                        (f = e.failure),
                        (s = o()),
                        (p = s.auth.accessToken.token),
                        n(l()),
                        n((0, i.startLoading)(l().type + '_LOADING')),
                        (v.prev = 4),
                        (v.next = 7),
                        a.default.awrap(
                          t.apply(
                            void 0,
                            (0, u.default)(
                              p.length < 1
                                ? r
                                : [d(d({}, r[0]), {}, { headers: { accessToken: p } })],
                            ),
                          ),
                        )
                      );
                    case 7:
                      return (
                        (g = v.sent),
                        n(c(g)),
                        n((0, i.finishLoading)(l().type + '_LOADING')),
                        v.abrupt('return', g)
                      );
                    case 13:
                      return (
                        (v.prev = 13),
                        (v.t0 = v.catch(4)),
                        (A = v.t0.response.status),
                        n(f((m = { status: A }))),
                        n((0, i.finishLoading)(l().type + '_LOADING')),
                        v.abrupt('return', m)
                      );
                    case 20:
                    case 'end':
                      return v.stop();
                  }
              },
              null,
              null,
              [[4, 13]],
              Promise,
            );
          };
        };
      };
      t.default = c;
    },
    16: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Header', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'Image', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'BottomLineInput', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'Text', {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'Rowbox', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'Colbox', {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, 'RadiusButton', {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'BorderInput', {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'FloatingButton', {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, 'TextArea', {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, 'Toast', {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        });
      var a = r(n(713)),
        o = r(n(299)),
        u = r(n(717)),
        i = r(n(300)),
        l = r(n(720)),
        d = r(n(721)),
        c = r(n(722)),
        f = r(n(723)),
        s = r(n(724)),
        p = r(n(726)),
        g = r(n(727));
    },
    239: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.finishLoading = t.startLoading = t.FINISH_LOADING = t.START_LOADING = void 0);
      var r = n(54);
      t.START_LOADING = 'loading/START_LOADING';
      t.FINISH_LOADING = 'loading/FINISH_LOADING';
      var a = (0, r.createAction)('loading/START_LOADING')();
      t.startLoading = a;
      var o = (0, r.createAction)('loading/FINISH_LOADING')();
      t.finishLoading = o;
    },
    248: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(13));
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var u = function (e) {
        var t = e.method,
          n = e.headers,
          r = (function (e) {
            var t = null == e ? void 0 : e.match(/(?::)(\D\w+)/gim);
            return t && t.length > 0
              ? t.map(function (e) {
                  return e.replace(':', '');
                })
              : [];
          })(e.url),
          u = (function (e, t, n) {
            var r = e;
            return (
              t.forEach(function (e) {
                r = r.replace(':' + e, n[e]);
              }),
              r
            );
          })(e.url, r, e),
          i = (function (e, t) {
            var n = t;
            return (
              delete n.url,
              delete n.method,
              delete n.headers,
              e.forEach(function (e) {
                n[e] && delete n[e];
              }),
              n
            );
          })(r, e);
        return '{}' === JSON.stringify(i)
          ? { url: u, method: t, headers: n }
          : (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? o(Object(n), !0).forEach(function (t) {
                      (0, a.default)(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                  : o(Object(n)).forEach(function (t) {
                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                    });
              }
              return e;
            })({ url: u, method: t, headers: n }, 'get' === e.method ? { params: i } : { data: i });
      };
      t.default = u;
    },
    29: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'callApi', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'cashImages', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'widthPersentToPx', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'stackNavigate', {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'getUniqueKey', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'arrayConditionCheck', {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, 'makeUrlOptions', {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'textValidation', {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'getLevelType', {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        });
      var a = r(n(102)),
        o = r(n(539)),
        u = r(n(550)),
        i = r(n(551)),
        l = r(n(552)),
        d = r(n(553)),
        c = r(n(248)),
        f = r(n(554)),
        s = r(n(555));
    },
    298: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(16),
        l = n(12);
      function d() {
        var e = (0, a.default)([
          '\n  width: ',
          ';\n  position: absolute;\n  background-color: ',
          ';\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, a.default)([
          '\n  width: 100%;\n  height: 8px;\n  border-radius: 30px;\n  background-color: #3a3a3a;\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, a.default)(['\n  width: 100%;\n']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var s = u.default.View(f()),
        p = u.default.View(c()),
        g = (0, u.default)(p)(
          d(),
          function (e) {
            var t = e.width;
            return null != t ? t : '0px';
          },
          function (e) {
            var t = e.fillColor;
            return null != t ? t : '#b029df';
          },
        ),
        A = function (e) {
          var t = e.persentage,
            n = e.fillColor,
            r = e.postCountForPromotion,
            a = e.commentCountForPromotion;
          return o.default.createElement(
            s,
            null,
            o.default.createElement(
              i.Rowbox,
              { align: 'flex-end' },
              o.default.createElement(
                i.Rowbox,
                { width: 'auto', marginRight: '12px' },
                o.default.createElement(i.RadiusButton, {
                  text: '\uac8c\uc2dc\uae00',
                  borderRadius: '10px',
                  bgColor: '#161616',
                  fontSize: '12px',
                  color: '#717171',
                  width: '49px',
                  height: '19px',
                  marginRight: '2px',
                }),
                o.default.createElement(i.Text, {
                  text: '' + r,
                  fontSize: '15px',
                  fontWeight: 800,
                  color: l.WHITE,
                }),
              ),
              o.default.createElement(
                i.Rowbox,
                { width: 'auto', marginRight: '12px' },
                o.default.createElement(i.RadiusButton, {
                  text: '\ub313\uae00',
                  borderRadius: '10px',
                  bgColor: '#161616',
                  fontSize: '12px',
                  color: '#717171',
                  width: '49px',
                  height: '19px',
                  marginRight: '2px',
                }),
                o.default.createElement(i.Text, {
                  text: '' + a,
                  fontSize: '15px',
                  fontWeight: 800,
                  color: l.WHITE,
                }),
              ),
              o.default.createElement(i.Text, {
                text: '\ub354 \uc791\uc131\ud558\uba74 \ub4f1\uae09 \uc5c5',
                fontSize: '15px',
                fontWeight: 200,
                color: l.WHITE,
              }),
            ),
            o.default.createElement(
              i.Rowbox,
              { marginTop: '10px' },
              o.default.createElement(p, null),
              o.default.createElement(g, { width: 100 * t + '%', fillColor: n }),
            ),
          );
        };
      t.default = A;
    },
    299: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(715)).default;
      t.default = a;
    },
    300: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(719)).default;
      t.default = a;
    },
    303: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAYAAADPRbkKAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIXSURBVHgB1ZntUcJAEIbfPSwg2oDYgXaQDrQD6UCsQK0ArMBQgVCBoQLpgI8GyH9N1s3ByFcSLpkE7p4ZJjO5JLd7+97d3gKcAF5cfcBVeOr5PL9kcaKHBlBoGqU6+srcTZ1BzRAaRAxuQ9F069YMCd/RTRShJpqNgFKve3faaNEnaqQxB/Tog+8PG+BLWxc10WQEfPl5mS2KeuLELWqAeHG5CqniIX4wFn3OUAOy8qTabxc8Unk+iPMeLtSTvN+9QMzjdEQQ00MaD3EoFLeG+NXOTFAB6aBzxHjo9pZ6keszKhguPx1d0jcVLXPemYEoRJwMxJkQhvDC+wKTb/Rwws/y7T6KDfdXyzE/7rdRiQ4jcWYIlYQitVFe6LW2FX3DnGgtpRmyDG/RSzrx816m9YMd6bTcdk8IZd4E+/OG51dB1kgdYULXyztsDO+I4Y9Fhm/MwFpbqw3HQzVkrtAYiURHVVznifpiTaT1XcKO/51YnAik87Ijd3a294EADrKTC8nana5GVWV0FnZ34oQHcIz9VGIIxzhIpw1SAKs4TOYck1FWNhrAIQ4c0LsqcQhHyD4PxBjBETLPxEcyVKvIjIDONB2RUf6R0hEZFZ2JA6S5uuXkOrCWUaUj5SkprkrEeIPlHCurpBGwWkaFDmgZWZ5amBS2rM5QjYq7Nh90zEqLCb/DUkxroyEsxfj/gVLVtpxPoAH+AFwD0EY0Kqk2AAAAAElFTkSuQmCC';
    },
    304: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(42),
        l = n(12);
      function d() {
        var e = (0, a.default)([
          '\n  width: 100%;\n  ',
          ';\n  background-color: ',
          ';\n  height: ',
          ';\n  border: none;\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = u.default.View(
          d(),
          i.marginStyles,
          function (e) {
            var t = e.color;
            return null != t ? t : '' + l.GREY;
          },
          function (e) {
            var t = e.height;
            return null != t ? t : '1px';
          },
        ),
        f = function (e) {
          var t = e.marginLeft,
            n = e.marginTop,
            r = e.marginBottom,
            a = e.marginRight,
            u = e.color,
            i = e.height;
          return o.default.createElement(c, {
            marginLeft: t,
            marginTop: n,
            marginBottom: r,
            marginRight: a,
            color: u,
            height: i,
          });
        };
      t.default = f;
    },
    305: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGxSURBVHgB7dw9TgJBHIbx/4zYEBt7NHgESwsjJxCu4A3sJYbGe8gN4AZEYmy5gRQegAvAOKMbgybwkmU/MHmeBLK7FJBf2Ldcd/76GIw25o22BpAIIBFAIoBEAIkAEgEkAkgEkAggEUAigEQAiQASASQCSASQCCARQCKARACJABIBJAJIBJAIIBFAIoBEAIkAEgEkAkgEkAggEUAigEQAiQASASQCSASQCCARQCKARACJABIBJAJIBJAIIBFAIoBEAIkAEgEkAkgEkAggEUCi+oGCLUIIk3h075v+1Ht/Ec/vnLmRHUANq6OIEt+Hq7AcNU6OZ/PLwWLt03T8nL3s7KXfc973zNlNPG1bxbkKH48zjzDjhPJx/TSxHLWmDx3vjhJW176x0m93VmKlAqVbxzk3irfNeH41mFuBtd8G7dVq1Q3Bus5ZJ7tcOFaxQGlPLMy+UJp++OfWKa2EtVwu47/L38bv72WXC8HaH2j7ntRStlvdtd3KjZUXaO89qarWtN/xCct+diu1M9jOQGXuSVXl2a3NQDXtSVXtulu/gQ5wT6pq024loPf/sidVtb5bn/Eep8q8K5F/AAAAAElFTkSuQmCC';
    },
    306: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = n(16),
        d = r(n(107)),
        c = r(n(763)),
        f = r(n(305)),
        s = r(n(764)),
        p = r(n(34)),
        g = r(n(140));
      function A() {
        var e = (0, a.default)([
          '\n  width: 100%;\n  height: 285px;\n  padding: ',
          ';\n  justify-content: space-between;\n  align-items: center;\n  background-color: ',
          ';\n  border-radius: 25px;\n  overflow: hidden;\n',
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      var m = u.default.View(A(), p.default.width / 21 + 'px', i.WHITE),
        v = function (e) {
          var t = e.postDetailProps,
            n = e.handlePressLike,
            r = e.handlePressBookmark,
            a = e.handlePressDeleteBookmark,
            u = t.detailedPost,
            p = u.id,
            A = u.author,
            v = u.content,
            O = u.likes,
            E = (u.bookMarkCount, u.commentCount),
            h = u.pressLike,
            S = u.pressBookMark,
            b = u.createdDate;
          u.modifiedDate;
          return o.default.createElement(
            m,
            null,
            o.default.createElement(
              l.Rowbox,
              { justifyContent: 'flex-end' },
              S
                ? o.default.createElement(l.Image, {
                    imgSrc: f.default,
                    width: '16px',
                    height: '17px',
                    onPress: function () {
                      a(p);
                    },
                  })
                : o.default.createElement(l.Image, {
                    imgSrc: c.default,
                    width: '16px',
                    height: '17px',
                    onPress: function () {
                      r(p);
                    },
                  }),
              o.default.createElement(l.Image, {
                marginLeft: '5px',
                imgSrc: s.default,
                width: '16px',
                height: '17px',
                onPress: function () {
                  g.default.alert(
                    '\uc2e0\uace0\ud558\uae30',
                    '\uc2e0\uace0\ub294 \ucde8\uc18c \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \uc2e0\uace0\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?',
                    [
                      {
                        text: '\ucde8\uc18c',
                        onPress: function () {
                          return console.log('Cancel Pressed');
                        },
                        style: 'cancel',
                      },
                      {
                        text: '\uc2e0\uace0',
                        onPress: function () {
                          return console.log('OK Pressed');
                        },
                      },
                    ],
                    { cancelable: !1 },
                  );
                },
              }),
            ),
            o.default.createElement(
              l.Colbox,
              null,
              o.default.createElement(
                l.Rowbox,
                { align: 'center', width: '100%', height: '182px', marginBottom: '9px' },
                o.default.createElement(l.Text, {
                  text: v,
                  fontSize: '43px',
                  fontWeight: 800,
                  color: i.DARK_GREY,
                  textAlign: 'center',
                }),
              ),
            ),
            o.default.createElement(
              l.Rowbox,
              { width: '100%', justifyContent: 'space-between' },
              o.default.createElement(
                l.Rowbox,
                { width: 'auto' },
                o.default.createElement(d.default, {
                  heartCount: O,
                  commentCount: E,
                  pressLike: h,
                  onPressHeart: function () {
                    n(p);
                  },
                  heartWidth: '20px',
                  heartHeight: '20px',
                  commentWidth: '16px',
                  commentHeight: '20px',
                }),
              ),
              o.default.createElement(
                l.Colbox,
                { align: 'flex-end' },
                o.default.createElement(l.Text, {
                  text: A.nickname,
                  fontSize: '14px',
                  fontWeight: 800,
                  color: i.DARK_GREY,
                }),
                o.default.createElement(l.Text, {
                  text: b,
                  fontSize: '12px',
                  fontWeight: 300,
                  color: i.DARK_GREY,
                }),
              ),
            ),
          );
        };
      t.default = v;
    },
    307: function (e, t, n) {
      e.exports = n.p + 'static/media/level_one_profile.3c3aa7af.png';
    },
    309: function (e, t, n) {
      e.exports = n.p + 'static/media/logo.8fa9b46e.png';
    },
    310: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.NotiHeaderStyle = t.HomeHeaderStyle = void 0);
      var r = n(12),
        a = {
          backgroundColor: r.DARK_GREY,
          height: 100,
          shadowRadius: 0,
          shadowOffset: { height: 0 },
        };
      t.HomeHeaderStyle = a;
      var o = {
        backgroundColor: r.DARK_GREY,
        height: 100,
        shadowRadius: 0,
        shadowOffset: { height: 0 },
      };
      t.NotiHeaderStyle = o;
    },
    335: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.postLoginThunk = t.postCreataeAccountThunk = void 0);
      var a = r(n(153)),
        o = r(n(102)),
        u = n(101),
        i = (0, a.default)(u.createAccountRequestAsync, o.default);
      t.postCreataeAccountThunk = i;
      var l = (0, a.default)(u.postLoginRequestAsync, o.default);
      t.postLoginThunk = l;
    },
    337: function (e, t, n) {
      n(338), (e.exports = n(339));
    },
    338: function (e, t) {
      'serviceWorker' in navigator &&
        window.addEventListener('load', function () {
          navigator.serviceWorker
            .register('/expo-service-worker.js', { scope: '/' })
            .then(function (e) {})
            .catch(function (e) {
              console.info('Failed to register service-worker', e);
            });
        });
    },
    34: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(33)).default.get('screen'),
        o = { width: a.width, height: a.height };
      t.default = o;
    },
    416: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(19)),
        u = a(n(14)),
        i = r(n(1)),
        l = n(50),
        d = a(n(98)),
        c = n(422),
        f = n(461),
        s = n(45),
        p = a(n(507)),
        g = n(29),
        A = a(n(556)),
        m = (0, p.default)(),
        v = m.store,
        O = m.persistor,
        E = function () {
          var e = (0, i.useState)(!1),
            t = (0, u.default)(e, 2),
            r = t[0],
            a = t[1];
          return r
            ? i.default.createElement(
                l.Provider,
                { store: v },
                i.default.createElement(
                  f.PersistGate,
                  { loading: null, persistor: O },
                  i.default.createElement(
                    s.NavigationContainer,
                    null,
                    i.default.createElement(d.default, { barStyle: 'light-content' }),
                    i.default.createElement(A.default, null),
                  ),
                ),
              )
            : i.default.createElement(c.AppLoading, {
                startAsync: function () {
                  return o.default.async(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (0, g.cashImages)([
                              'https://images.unsplash.com/photo-1594569567351-ad9e90210643?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
                              n(956),
                            ]);
                          case 1:
                          case 'end':
                            return e.stop();
                        }
                    },
                    null,
                    null,
                    null,
                    Promise,
                  );
                },
                onFinish: function () {
                  a(!0);
                },
                onError: function (e) {
                  console.log(e);
                },
              });
        };
      t.default = E;
    },
    42: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.paddingStyles = t.marginStyles = void 0);
      var a = r(n(6)),
        o = n(716);
      function u() {
        var e = (0, a.default)([
          '\n  padding-top: ',
          ';\n  padding-bottom: ',
          ';\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n',
        ]);
        return (
          (u = function () {
            return e;
          }),
          e
        );
      }
      function i() {
        var e = (0, a.default)([
          '\n  margin-top: ',
          ';\n  margin-bottom: ',
          ';\n  margin-left: ',
          ';\n  margin-right: ',
          ';\n',
        ]);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      var l = (0, o.css)(
        i(),
        function (e) {
          var t = e.marginTop;
          return null != t ? t : 0;
        },
        function (e) {
          var t = e.marginBottom;
          return null != t ? t : 0;
        },
        function (e) {
          var t = e.marginLeft;
          return null != t ? t : 0;
        },
        function (e) {
          var t = e.marginRight;
          return null != t ? t : 0;
        },
      );
      t.marginStyles = l;
      var d = (0, o.css)(
        u(),
        function (e) {
          var t = e.paddingTop;
          return null != t ? t : 0;
        },
        function (e) {
          var t = e.paddingBottom;
          return null != t ? t : 0;
        },
        function (e) {
          var t = e.paddingLeft;
          return null != t ? t : 0;
        },
        function (e) {
          var t = e.paddingRight;
          return null != t ? t : 0;
        },
      );
      t.paddingStyles = d;
    },
    48: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'SafeAreaContainer', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'KeyboardAvoidingViewer', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'HeaderWrapper', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'SectionWrapper', {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'BackgroundContainer', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'HideScrollbarWrapper', {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, 'StickyScrollView', {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'DeviceSection', {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'NoSafeArea', {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        });
      var a = r(n(703)),
        o = r(n(705)),
        u = r(n(706)),
        i = r(n(707)),
        l = r(n(708)),
        d = r(n(709)),
        c = r(n(710)),
        f = r(n(711)),
        s = r(n(712));
    },
    507: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(508)),
        o = n(57),
        u = n(958),
        i = r(n(509)),
        l = r(n(512)),
        d = { key: 'root', blacklist: ['user', 'loading', 'post'], storage: i.default },
        c = (0, u.persistReducer)(d, l.default),
        f = [a.default];
      t.default = function () {
        var e = (0, o.createStore)(c, o.applyMiddleware.apply(void 0, f));
        return { store: e, persistor: (0, u.persistStore)(e) };
      };
    },
    512: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = n(57),
        o = r(n(513)),
        u = r(n(515)),
        i = r(n(518)),
        l = r(n(520)),
        d = (0, a.combineReducers)({
          loading: o.default,
          post: u.default,
          user: i.default,
          auth: l.default,
        });
      t.default = d;
    },
    513: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(514)).default;
      t.default = a;
    },
    514: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a,
        o = r(n(13)),
        u = n(54),
        i = n(239);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var c = (0, u.createReducer)(
        {},
        ((a = {}),
        (0, o.default)(a, i.START_LOADING, function (e, t) {
          return d(d({}, e), {}, (0, o.default)({}, t.payload, !0));
        }),
        (0, o.default)(a, i.FINISH_LOADING, function (e, t) {
          return d(d({}, e), {}, (0, o.default)({}, t.payload, !1));
        }),
        a),
      );
      t.default = c;
    },
    515: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(516)).default;
      t.default = a;
    },
    516: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a,
        o = r(n(26)),
        u = r(n(13)),
        i = n(54),
        l = n(136);
      function d(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? d(Object(n), !0).forEach(function (t) {
                (0, u.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : d(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var f = r(n(517)).default,
        s = (0, i.createReducer)(
          f,
          ((a = {}),
          (0, u.default)(a, l.LOAD_POSTS_SUCCESS, function (e, t) {
            return c(c({}, e), {}, { postList: c(c({}, e.postList), t.payload) });
          }),
          (0, u.default)(a, l.LOAD_POSTS_FAILURE, function (e, t) {
            return c(c({}, e), t.payload);
          }),
          (0, u.default)(a, l.LOAD_POST_DETAIL_SUCCESS, function (e, t) {
            return c(
              c({}, e),
              {},
              {
                postDetail: c(
                  c({}, e.postDetail),
                  {},
                  { post: c(c({}, e.postDetail.post), t.payload) },
                ),
              },
            );
          }),
          (0, u.default)(a, l.LOAD_POST_DETAIL_FAILURE, function (e, t) {
            return c(c({}, e), t.payload);
          }),
          (0, u.default)(a, l.LOAD_COMMENTS_SUCCESS, function (e, t) {
            return c(
              c({}, e),
              {},
              {
                postDetail: c(
                  c({}, e.postDetail),
                  {},
                  { comment: c(c({}, e.postDetail.comment), t.payload) },
                ),
              },
            );
          }),
          (0, u.default)(a, l.LOAD_COMMENTS_FAILURE, function (e, t) {
            return c(c({}, e), t.payload);
          }),
          (0, u.default)(a, l.CREATE_POST_SUCCESS, function (e, t) {
            var n = e.postList,
              r = n.simplePage,
              a = n.posts,
              u = [t.payload.detailedPost].concat((0, o.default)(a));
            return c(c({}, e), {}, { postList: { posts: u, simplePage: r } });
          }),
          (0, u.default)(a, l.CREATE_POST_FAILURE, function (e, t) {
            return c({}, e);
          }),
          (0, u.default)(a, l.POST_COMMENT_SUCCESS, function (e, t) {
            var n = e.postDetail,
              r = n.comment,
              a = r.commentList,
              u = r.simplePage,
              i = n.post.detailedPost,
              l = e.postList,
              d = e.popularPosts,
              f = d.posts,
              s = d.simplePage,
              p = t.payload.detailedComment,
              g = [].concat((0, o.default)(a), [p]),
              A = function (e) {
                return e.map(function (e) {
                  return e.id === p.postId
                    ? c(c({}, e), {}, { commentCount: e.commentCount + 1 })
                    : c({}, e);
                });
              },
              m = A(l.posts),
              v = A(f);
            return c(
              c({}, e),
              {},
              {
                postList: { posts: m, simplePage: l.simplePage },
                popularPosts: { posts: v, simplePage: s },
                postDetail: {
                  post: { detailedPost: c(c({}, i), {}, { commentCount: i.commentCount + 1 }) },
                  comment: { commentList: g, simplePage: u },
                },
              },
            );
          }),
          (0, u.default)(a, l.POST_COMMENT_FAILURE, function (e, t) {
            return c({}, e);
          }),
          (0, u.default)(a, l.POST_LIKE_SUCCESS, function (e, t) {
            return c({}, e);
          }),
          (0, u.default)(a, l.POST_BOOKMARK_SUCCESS, function (e, t) {
            return c({}, e);
          }),
          (0, u.default)(a, l.ACTIVATION_BOOKMARK, function (e, t) {
            var n = e.postDetail;
            return c(
              c({}, e),
              {},
              {
                postDetail: {
                  post: { detailedPost: c(c({}, n.post.detailedPost), {}, { pressBookMark: !0 }) },
                  comment: n.comment,
                },
              },
            );
          }),
          (0, u.default)(a, l.ACTIVATION_LIKE, function (e, t) {
            var n = e.postList,
              r = n.posts,
              a = n.simplePage,
              o = e.postDetail,
              u = o.comment,
              i = o.post,
              l = e.popularPosts,
              d = l.posts,
              f = l.simplePage,
              s = t.payload,
              p = r.map(function (e) {
                return e.id === s ? c(c({}, e), {}, { pressLike: !0, likes: e.likes + 1 }) : e;
              });
            return c(
              c({}, e),
              {},
              {
                postList: { posts: p, simplePage: a },
                popularPosts: { posts: d, simplePage: f },
                postDetail: {
                  post: { detailedPost: c(c({}, i.detailedPost), {}, { pressLike: !0 }) },
                  comment: u,
                },
              },
            );
          }),
          (0, u.default)(a, l.LOAD_POPULAR_POST_SUCCESS, function (e, t) {
            return c(c({}, e), {}, { popularPosts: c({}, t.payload) });
          }),
          a),
        );
      t.default = s;
    },
    517: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      t.default = {
        postList: { posts: [], simplePage: { currentPage: 0, totalPages: 0, totalElements: 0 } },
        popularPosts: {
          posts: [],
          simplePage: { currentPage: 0, totalPages: 0, totalElements: 0 },
        },
        postDetail: {
          post: {
            detailedPost: {
              author: { id: 0, identification: '', nickname: '', rating: 'NEW_RECRUIT' },
              bookMarkCount: 0,
              commentCount: 0,
              content: '',
              createdDate: '',
              id: 0,
              likes: 0,
              modifiedDate: '',
              pressBookMark: !1,
              pressLike: !1,
            },
          },
          comment: {
            commentList: [],
            simplePage: { currentPage: 0, totalElements: 0, totalPages: 0 },
          },
        },
      };
    },
    518: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(519)).default;
      t.default = a;
    },
    519: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a,
        o = r(n(13)),
        u = n(54),
        i = n(137);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var c = {
          duplicateCheck: { isIdUsed: void 0, isNicknameUsed: void 0 },
          myComment: {
            commentList: [],
            simplePage: { currentPage: 0, totalElements: 0, totalPages: 0 },
          },
          myPost: { posts: [], simplePage: { currentPage: 0, totalPages: 0, totalElements: 0 } },
          myBookmark: {
            posts: [],
            simplePage: { currentPage: 0, totalPages: 0, totalElements: 0 },
          },
          ratingForPromotion: {
            currentRating: 'NEW_RECRUIT',
            nextRating: 'NEW_RECRUIT',
            postCountForPromotion: 0,
            commentCountForPromotion: 0,
            progress: 0,
            message: '',
          },
          notification: {
            detailedNoticeList: [
              {
                message: '',
                noticeId: 0,
                noticeType: '',
                postId: 0,
                createdDate: '1970.01.01',
                detailedPost: {
                  author: { id: 0, identification: '0', nickname: '', rating: 'NEW_RECRUIT' },
                  bookMarkCount: 0,
                  commentCount: 0,
                  content: '',
                  createdDate: '',
                  id: 0,
                  likes: 0,
                  modifiedDate: '',
                  pressBookMark: !1,
                  pressLike: !1,
                },
              },
            ],
            simplePage: { currentPage: 0, totalElements: 0, totalPages: 0 },
          },
          error: '',
          status: 401,
        },
        f = (0, u.createReducer)(
          c,
          ((a = {}),
          (0, o.default)(a, i.VERIFY_ID_SUCCESS, function (e, t) {
            return d(
              d({}, e),
              {},
              { duplicateCheck: d(d({}, e.duplicateCheck), {}, { isIdUsed: !1 }) },
            );
          }),
          (0, o.default)(a, i.VERIFY_ID_FAILURE, function (e, t) {
            return d(d({}, e), t.payload);
          }),
          (0, o.default)(a, i.VERIFY_NICKNAME_SUCCESS, function (e, t) {
            return d(
              d({}, e),
              {},
              { duplicateCheck: d(d({}, e.duplicateCheck), {}, { isNicknameUsed: !1 }) },
            );
          }),
          (0, o.default)(a, i.VERIFY_ID_FAILURE, function (e, t) {
            return d(
              d({}, e),
              {},
              { duplicateCheck: d(d({}, e.duplicateCheck), {}, { isIdUsed: !0 }) },
            );
          }),
          (0, o.default)(a, i.VERIFY_NICKNAME_FAILURE, function (e, t) {
            return d(
              d({}, e),
              {},
              { duplicateCheck: d(d({}, e.duplicateCheck), {}, { isNicknameUsed: !0 }) },
            );
          }),
          (0, o.default)(a, i.LOAD_MY_COMMENTS_SUCCESS, function (e, t) {
            return d(d({}, e), {}, { myComment: t.payload });
          }),
          (0, o.default)(a, i.LOAD_MY_POSTS_SUCCESS, function (e, t) {
            return d(d({}, e), {}, { myPost: t.payload });
          }),
          (0, o.default)(a, i.LOAD_MY_BOOKMARK_POSTS_SUCCESS, function (e, t) {
            return d(d({}, e), {}, { myBookmark: t.payload });
          }),
          (0, o.default)(a, i.LOAD_RATING_SUCCESS, function (e, t) {
            return d(d({}, e), t.payload);
          }),
          (0, o.default)(a, i.LOAD_NOTIFICATION_SUCCESS, function (e, t) {
            return d(d({}, e), {}, { notification: d({}, t.payload) });
          }),
          (0, o.default)(a, i.REMOVE_BOOKMARK, function (e, t) {
            var n = e.myBookmark,
              r = e.myPost,
              a = t.payload,
              o = n.posts.filter(function (e) {
                return e.id !== a;
              }),
              u = r.posts.map(function (e) {
                return e.id === a ? d(d({}, e), {}, { pressBookMark: !1 }) : d({}, e);
              });
            return d(
              d({}, e),
              {},
              {
                myBookmark: { posts: o, simplePage: n.simplePage },
                myPost: { posts: u, simplePage: r.simplePage },
              },
            );
          }),
          a),
        );
      t.default = f;
    },
    520: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(521)).default;
      t.default = a;
    },
    521: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a,
        o = r(n(13)),
        u = n(54),
        i = n(101);
      function l(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var c = {
          user: { id: 0, identification: '', nickname: '', rating: 'NEW_RECRUIT' },
          accessToken: { token: '', expire: 0 },
          refreshToken: '',
          error: '',
          status: 400,
        },
        f = (0, u.createReducer)(
          c,
          ((a = {}),
          (0, o.default)(a, i.CREATE_ACCOUNT_SUCCESS, function (e, t) {
            return d(d({}, e), t.payload);
          }),
          (0, o.default)(a, i.CREATE_ACCOUNT_FAILURE, function (e, t) {
            return d(d({}, e), t.payload);
          }),
          (0, o.default)(a, i.POST_LOGIN_SUCCESS, function (e, t) {
            return d(d({}, e), t.payload);
          }),
          (0, o.default)(a, i.POST_LOGIN_FAILURE, function (e, t) {
            return d(d({}, e), t.payload);
          }),
          (0, o.default)(a, i.LOGOUT, function () {
            return d({}, c);
          }),
          (0, o.default)(a, i.RESET, function () {
            return d(d({}, c), {}, { status: 400 });
          }),
          a),
        );
      t.default = f;
    },
    539: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(70)),
        o = n(544),
        u = function (e) {
          e.map(function (e) {
            return 'string' === typeof e
              ? a.default.prefetch(e)
              : o.Asset.fromModule(e).downloadAsync;
          });
        };
      t.default = u;
    },
    55: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'Gagebar', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'BackNaviate', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'IntroSentence', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, 'DeviceHeaderSticky', {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, 'IconMsg', {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(t, 'PostCard', {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        }),
        Object.defineProperty(t, 'NotiCard', {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(t, 'BottomLineTabNavi', {
          enumerable: !0,
          get: function () {
            return f.default;
          },
        }),
        Object.defineProperty(t, 'ValidationInput', {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(t, 'HomeStickyInner', {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(t, 'MiniPostCard', {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        Object.defineProperty(t, 'HearAndComment', {
          enumerable: !0,
          get: function () {
            return A.default;
          },
        }),
        Object.defineProperty(t, 'ProfileSentence', {
          enumerable: !0,
          get: function () {
            return m.default;
          },
        }),
        Object.defineProperty(t, 'CommentLog', {
          enumerable: !0,
          get: function () {
            return v.default;
          },
        }),
        Object.defineProperty(t, 'PostDetailCard', {
          enumerable: !0,
          get: function () {
            return O.default;
          },
        }),
        Object.defineProperty(t, 'Comment', {
          enumerable: !0,
          get: function () {
            return E.default;
          },
        }),
        Object.defineProperty(t, 'StickyKeyboard', {
          enumerable: !0,
          get: function () {
            return h.default;
          },
        }),
        Object.defineProperty(t, 'UnderBarArrow', {
          enumerable: !0,
          get: function () {
            return S.default;
          },
        });
      var a = r(n(298)),
        o = r(n(737)),
        u = r(n(739)),
        i = r(n(745)),
        l = r(n(152)),
        d = r(n(746)),
        c = r(n(750)),
        f = r(n(751)),
        s = r(n(752)),
        p = r(n(753)),
        g = r(n(755)),
        A = r(n(107)),
        m = r(n(756)),
        v = r(n(762)),
        O = r(n(306)),
        E = r(n(765)),
        h = r(n(766)),
        S = r(n(774));
    },
    550: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(34)),
        o = function (e) {
          return a.default.width * e + 'px';
        };
      t.default = o;
    },
    551: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = function (e, t) {
        e.navigate(t);
      };
      t.default = n;
    },
    552: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(957),
        a = function (e) {
          return (0, r.v5)('' + e, r.v5.DNS);
        };
      t.default = a;
    },
    553: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = function (e, t) {
        return e.every(t);
      };
      t.default = n;
    },
    554: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = {
        onlyLowercaseAndNumberValidator: function (e) {
          return /^[a-z0-9]*$/g.test(e);
        },
        passwordValidator: function (e) {
          return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(e);
        },
        exceptSpecialCaractor: function (e) {
          return /^[a-z0-9\u3131-\ud7a3]*$/g.test(e);
        },
      };
      t.default = n;
    },
    555: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var n = function (e) {
        return 'ASSISTANT_MANAGE' === e
          ? '\ub300\ub9ac'
          : 'DEPARTMENT_HEAD' === e
          ? '\ubd80\uc7a5'
          : 'MANAGING_DIRECTOR' === e
          ? '\uc0c1\ubb34'
          : 'BOSS' === e
          ? '\uc0ac\uc7a5'
          : '\uc2e0\uc785';
      };
      t.default = n;
    },
    556: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(50),
        l = r(n(670)),
        d = r(n(948));
      function c() {
        var e = (0, a.default)(['\n  flex: 1;\n']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.default.View(c()),
        s = function () {
          var e = (0, i.useSelector)(function (e) {
            return e;
          }).auth.accessToken.token;
          return o.default.createElement(
            f,
            null,
            e ? o.default.createElement(l.default, null) : o.default.createElement(d.default, null),
          );
        };
      t.default = s;
    },
    64: function (e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getPopularPosts = t.postLogin = t.getNotifications = t.getRatingStatus = t.deleteBookmark = t.postBookmark = t.postLike = t.getMyBookmarkPosts = t.getMyPosts = t.getMyComments = t.postComment = t.postCreateContent = t.getCommnets = t.getDetailedPost = t.getPosts = t.postNicknameCheck = t.postIdentificationCheck = t.postCreateAccount = void 0);
      var n = 'http://ec2-3-34-24-138.ap-northeast-2.compute.amazonaws.com:8080',
        r = { url: n + '/v1/api/auth/sign-up', method: 'post' };
      t.postCreateAccount = r;
      var a = {
        url: n + '/v1/api/users/identifications/:identification/existence',
        method: 'post',
      };
      t.postIdentificationCheck = a;
      var o = { url: n + '/v1/api/users/nicknames/:nickname/existence', method: 'post' };
      t.postNicknameCheck = o;
      var u = { url: n + '/v1/api/posts?currentPage=:currentPage&size=:size', method: 'get' };
      t.getPosts = u;
      var i = { url: n + '/v1/api/posts/:postId', method: 'get' };
      t.getDetailedPost = i;
      var l = {
        url: n + '/v1/api/posts/:postId/comments?currentPage=:currentPage&size=:size',
        method: 'get',
      };
      t.getCommnets = l;
      var d = { url: n + '/v1/api/posts/post', method: 'post' };
      t.postCreateContent = d;
      var c = { url: n + '/v1/api/posts/:postId/comments/comment', method: 'post' };
      t.postComment = c;
      var f = { url: n + '/v1/api/users/:userId/comments', method: 'get' };
      t.getMyComments = f;
      var s = { url: n + '/v1/api/users/:userId/posts', method: 'get' };
      t.getMyPosts = s;
      var p = { url: n + '/v1/api/users/:userId/bookmark/posts', method: 'get' };
      t.getMyBookmarkPosts = p;
      var g = { url: n + '/v1/api/posts/:postId/likes', method: 'post' };
      t.postLike = g;
      var A = { url: n + '/v1/api/users/bookmark/posts/:postId', method: 'post' };
      t.postBookmark = A;
      var m = { url: n + '/v1/api/users/bookmark/posts/:postId', method: 'delete' };
      t.deleteBookmark = m;
      var v = { url: n + '/v1/api/users/:userId/rating', method: 'get' };
      t.getRatingStatus = v;
      var O = { url: n + '/v1/api/users/:userId/notices', method: 'get' };
      t.getNotifications = O;
      var E = { url: n + '/v1/api/auth/sign-in', method: 'post' };
      t.postLogin = E;
      var h = {
        url: n + '/v1/api/posts/popular?currentPage=:currentPage&size=:size',
        method: 'get',
      };
      t.getPopularPosts = h;
    },
    670: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(278),
        u = r(n(700)),
        i = n(16),
        l = n(55),
        d = r(n(309)),
        c = r(n(776)),
        f = r(n(307)),
        s = n(310),
        p = n(48),
        g = r(n(777)),
        A = r(n(929)),
        m = n(12),
        v = r(n(941)),
        O = r(n(944)),
        E = (0, o.createStackNavigator)(),
        h = function () {
          return a.default.createElement(
            E.Navigator,
            { mode: 'card' },
            a.default.createElement(E.Screen, {
              name: 'Home',
              component: u.default,
              options: function (e) {
                var t = e.navigation;
                return {
                  headerLeft: function () {
                    return a.default.createElement(
                      p.HeaderWrapper,
                      null,
                      a.default.createElement(i.Image, { imgSrc: d.default }),
                    );
                  },
                  headerRight: function () {
                    return a.default.createElement(
                      p.HeaderWrapper,
                      null,
                      a.default.createElement(i.Image, {
                        onPress: function () {
                          t.navigate('Notification');
                        },
                        imgSrc: c.default,
                        marginRight: '7px',
                        width: '25px',
                        height: '26px',
                      }),
                      a.default.createElement(i.Image, {
                        onPress: function () {
                          t.navigate('Profile');
                        },
                        imgSrc: f.default,
                        width: '34px',
                        height: '32px',
                      }),
                    );
                  },
                  headerTitle: '',
                  headerStyle: s.HomeHeaderStyle,
                };
              },
            }),
            a.default.createElement(E.Screen, {
              name: 'Notification',
              component: g.default,
              options: function (e) {
                var t = e.navigation;
                return {
                  headerLeft: function () {
                    return a.default.createElement(
                      p.HeaderWrapper,
                      null,
                      a.default.createElement(l.BackNaviate, { title: '', navigation: t }),
                    );
                  },
                  headerTitle: '\uc54c\ub9bc',
                  headerStyle: s.NotiHeaderStyle,
                  headerTitleStyle: { fontWeight: 'bold', fontSize: 16, color: m.WHITE },
                };
              },
            }),
            a.default.createElement(E.Screen, {
              name: 'Profile',
              component: A.default,
              options: function (e) {
                var t = e.navigation;
                return {
                  headerLeft: function () {
                    return a.default.createElement(
                      p.HeaderWrapper,
                      null,
                      a.default.createElement(l.BackNaviate, { title: ' ', navigation: t }),
                    );
                  },
                  headerTitle: '\ub9c8\uc774\ud398\uc774\uc9c0',
                  headerStyle: s.HomeHeaderStyle,
                  headerTitleStyle: { fontWeight: 'bold', fontSize: 16, color: m.WHITE },
                };
              },
            }),
            a.default.createElement(E.Screen, {
              name: 'PostWrite',
              component: v.default,
              options: function (e) {
                var t = e.navigation;
                return {
                  headerLeft: function () {
                    return a.default.createElement(
                      p.HeaderWrapper,
                      null,
                      a.default.createElement(l.BackNaviate, { title: ' ', navigation: t }),
                    );
                  },
                  headerTitle: '\uac8c\uc2dc\uae00 \uc791\uc131',
                  headerStyle: s.HomeHeaderStyle,
                  headerTitleStyle: { fontWeight: 'bold', fontSize: 16, color: m.WHITE },
                };
              },
            }),
            a.default.createElement(E.Screen, {
              name: 'PostDetail',
              component: O.default,
              options: function (e) {
                var t = e.navigation;
                return {
                  headerLeft: function () {
                    return a.default.createElement(
                      p.HeaderWrapper,
                      null,
                      a.default.createElement(l.BackNaviate, { title: ' ', navigation: t }),
                    );
                  },
                  headerTitle: '\uac8c\uc2dc\uae00',
                  headerStyle: s.HomeHeaderStyle,
                  headerTitleStyle: { fontWeight: 'bold', fontSize: 16, color: m.WHITE },
                };
              },
            }),
          );
        };
      t.default = h;
    },
    700: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(701)).default;
      t.default = a;
    },
    701: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(19)),
        u = a(n(13)),
        i = a(n(14)),
        l = r(n(1)),
        d = n(50),
        c = a(n(702)),
        f = n(64),
        s = n(85),
        p = n(108);
      function g(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function A(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(n), !0).forEach(function (t) {
                (0, u.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : g(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var m = function (e) {
        var t = e.navigation,
          n = (0, d.useDispatch)(),
          r = (0, d.useSelector)(function (e) {
            return e;
          }),
          a = r.auth.user.id,
          u = r.post,
          g = u.postList.posts,
          m = u.postDetail.comment.commentList,
          v = u.popularPosts.posts,
          O = r.user.ratingForPromotion,
          E = r.loading['post/CREATE_POST_LOADING'],
          h = (0, l.useState)(!1),
          S = (0, i.default)(h, 2),
          b = S[0],
          P = S[1],
          _ = (0, l.useState)(!1),
          y = (0, i.default)(_, 2),
          C = y[0],
          T = y[1],
          x = (0, l.useState)(!1),
          R = (0, i.default)(x, 2),
          I = R[0],
          L = R[1],
          k = function () {
            T(!0);
            var e = A(A({}, f.getPosts), {}, { currentPage: 1, size: 200 }),
              t = A(A({}, f.getPopularPosts), {}, { currentPage: 1, size: 200 });
            n((0, s.getPopularPostsThunk)(t)), n((0, s.getPostsThunk)(e)), T(!1);
          },
          w = function () {
            var e = A(A({}, f.getRatingStatus), {}, { userId: a });
            n((0, p.getMyRatingThunk)(e));
          },
          M = function () {
            var e = A(A({}, f.getMyComments), {}, { userId: a });
            n((0, p.getMyCommentsThunk)(e));
          },
          D = function () {
            var e = A(A({}, f.getMyPosts), {}, { userId: a });
            n((0, p.getMyPostsThunk)(e));
          };
        return (
          (0, l.useEffect)(function () {
            k(),
              w(),
              M(),
              D(),
              (function () {
                var e = A(A({}, f.getMyBookmarkPosts), {}, { userId: a });
                n((0, p.getMyBookmarkPostsThunk)(e));
              })(),
              (function () {
                var e = A(A({}, f.getNotifications), {}, { userId: a });
                n((0, p.getNotificationsThunk)(e));
              })();
          }, []),
          (0, l.useEffect)(
            function () {
              w();
            },
            [g, m],
          ),
          (0, l.useEffect)(
            function () {
              D();
            },
            [g],
          ),
          (0, l.useEffect)(
            function () {
              M();
            },
            [m],
          ),
          (0, l.useEffect)(
            function () {
              E &&
                (setTimeout(function () {
                  P(!0);
                }, 200),
                setTimeout(function () {
                  P(!1);
                }, 3e3));
            },
            [E],
          ),
          l.default.createElement(c.default, {
            posts: g,
            popularPosts: v,
            handleNavigateToPostWrite: function () {
              t.navigate('PostWrite');
            },
            handleNavigateToPostDeatil: function (e) {
              var r, a, u;
              return o.default.async(
                function (i) {
                  for (;;)
                    switch ((i.prev = i.next)) {
                      case 0:
                        return (
                          (r = A(
                            A({}, f.getCommnets),
                            {},
                            { postId: e, currentPage: 1, size: 200 },
                          )),
                          (a = A(A({}, f.getDetailedPost), {}, { postId: e })),
                          (i.next = 4),
                          o.default.awrap(n((0, s.getCommentsThunk)(r)))
                        );
                      case 4:
                        return (i.next = 6), o.default.awrap(n((0, s.getPostDetailThunk)(a)));
                      case 6:
                        (u = function (e, t) {
                          var r = A(A({}, f.postComment), {}, { comment: t, postId: e });
                          n((0, s.postCommentThunk)(r));
                        }),
                          t.navigate('PostDetail', { handlePostCommnet: u });
                      case 8:
                      case 'end':
                        return i.stop();
                    }
                },
                null,
                null,
                null,
                Promise,
              );
            },
            showCreatePostToast: b,
            ratingForPromotion: O,
            loadPosts: k,
            isLoading: C,
            isPopular: I,
            handleIsPopular: function () {
              L(!I);
            },
          })
        );
      };
      t.default = m;
    },
    702: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(48),
        u = n(55),
        i = n(16),
        l = n(29),
        d = n(12),
        c = function (e) {
          var t = e.posts,
            n = e.popularPosts,
            r = e.handleNavigateToPostWrite,
            c = e.handleNavigateToPostDeatil,
            f = e.showCreatePostToast,
            s = e.ratingForPromotion,
            p = e.loadPosts,
            g = e.isLoading,
            A = e.isPopular,
            m = e.handleIsPopular,
            v = A ? n : t;
          return a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(i.Toast, {
              visible: f,
              animation: !0,
              hideOnPress: !0,
              message: '\uac8c\uc2dc\uae00 \uc791\uc131 \uc644\ub8cc',
            }),
            a.default.createElement(
              o.BackgroundContainer,
              { bgColor: d.GREY_DARK },
              a.default.createElement(
                o.SafeAreaContainer,
                null,
                a.default.createElement(
                  o.StickyScrollView,
                  { stickyPosition: 1, isLoading: g, fething: p },
                  a.default.createElement(
                    o.BackgroundContainer,
                    { bgColor: d.DARK_GREY },
                    a.default.createElement(
                      o.SectionWrapper,
                      { marginBottom: '25px' },
                      a.default.createElement(u.IntroSentence, { ratingForPromotion: s }),
                    ),
                  ),
                  a.default.createElement(
                    u.DeviceHeaderSticky,
                    null,
                    a.default.createElement(u.HomeStickyInner, {
                      isPopular: A,
                      handleIsPopular: m,
                    }),
                  ),
                  a.default.createElement(
                    o.DeviceSection,
                    null,
                    null == v
                      ? void 0
                      : v.map(function (e, t) {
                          return a.default.createElement(u.PostCard, {
                            id: e.id,
                            nickname: e.author.nickname,
                            createdDate: e.createdDate,
                            content: e.content,
                            likes: e.likes,
                            commentCount: e.commentCount,
                            pressBookMark: e.pressBookMark,
                            pressLike: e.pressLike,
                            rating: e.author.rating,
                            type: 'normal',
                            key: (0, l.getUniqueKey)(t),
                            onPress: function () {
                              c(e.id);
                            },
                          });
                        }),
                  ),
                ),
                a.default.createElement(i.FloatingButton, { navigate: r }),
              ),
            ),
          );
        };
      t.default = c;
    },
    703: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(704),
        l = n(84),
        d = n(12);
      function c() {
        var e = (0, a.default)([
          '\n  flex: 1;\n  /* margin-top: ',
          '; */\n  background-color: ',
          ';\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.default.SafeAreaView(c(), (0, i.getStatusBarHeight)(), d.DARK_GREY),
        s = function (e) {
          var t = e.children;
          return (0, l.ifIphoneX)(
            o.default.createElement(f, null, t),
            o.default.createElement(o.default.Fragment, null, t),
          );
        };
      t.default = s;
    },
    705: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(7));
      function i() {
        var e = (0, a.default)(['\n  flex: 1;\n']);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      var l = r(n(8)).default.KeyboardAvoidingView(i()),
        d = function (e) {
          var t = e.children;
          return o.default.createElement(
            l,
            { behavior: 'ios' == u.default.OS ? 'padding' : 'height' },
            t,
          );
        };
      t.default = d;
    },
    706: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(34));
      function l() {
        var e = (0, a.default)([
          '\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  margin-left: ',
          ';\n  margin-right: ',
          ';\n  justify-content: space-between;\n',
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var d = u.default.View(l(), i.default.width / 18 + 'px', i.default.width / 18 + 'px'),
        c = function (e) {
          var t = e.children;
          return o.default.createElement(d, null, t);
        };
      t.default = c;
    },
    707: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(34)),
        l = r(n(63)),
        d = r(n(41)),
        c = r(n(7));
      function f() {
        var e = (0, a.default)([
          '\n  flex: 1;\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n  justify-content: ',
          ';\n  margin-top: ',
          ';\n  margin-bottom: ',
          ';\n  padding-bottom: ',
          ';\n  background-color: ',
          ';\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var s = u.default.View(
          f(),
          i.default.width / 18 + 'px',
          i.default.width / 18 + 'px',
          function (e) {
            var t = e.justifyContent;
            return null != t ? t : 'space-between';
          },
          function (e) {
            var t = e.marginTop;
            return null != t ? t : '0px';
          },
          function (e) {
            var t = e.marginBottom;
            return null != t ? t : '0px';
          },
          function (e) {
            var t = e.paddingBottom;
            return null != t ? t : '0px';
          },
          function (e) {
            var t = e.bgColor;
            return null != t ? t : 'transparent';
          },
        ),
        p = function (e) {
          var t = e.children,
            n = e.marginBottom,
            r = e.marginTop,
            a = e.justifyContent,
            u = e.bgColor,
            i = e.paddingBottom;
          return o.default.createElement(
            l.default,
            { onPress: 'web' !== c.default.OS ? d.default.dismiss : void 0 },
            o.default.createElement(
              s,
              { bgColor: u, marginBottom: n, marginTop: r, justifyContent: a, paddingBottom: i },
              t,
            ),
          );
        };
      t.default = p;
    },
    708: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12);
      function l() {
        var e = (0, a.default)(['\n  flex: 1;\n  background-color: ', ';\n']);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var d = u.default.View(l(), function (e) {
          var t = e.bgColor;
          return null != t ? t : '' + i.DARK_GREY;
        }),
        c = function (e) {
          var t = e.children,
            n = e.bgColor;
          return o.default.createElement(d, { bgColor: n }, t);
        };
      t.default = c;
    },
    709: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = r(n(71)),
        u = function (e) {
          var t = e.children;
          return a.default.createElement(o.default, { showsVerticalScrollIndicator: !1 }, t);
        };
      t.default = u;
    },
    710: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = r(n(105));
      function d() {
        var e = (0, a.default)(['\n  background-color: ', ';\n']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = u.default.ScrollView(d(), i.DARK_GREY),
        f = function (e) {
          var t = e.children,
            n = e.stickyPosition,
            r = e.isLoading,
            a = e.fething;
          return o.default.createElement(
            c,
            {
              stickyHeaderIndices: [n],
              showsVerticalScrollIndicator: !1,
              refreshControl:
                'boolean' === typeof r
                  ? o.default.createElement(l.default, {
                      tintColor: '#f8f8ff',
                      refreshing: r,
                      onRefresh: a,
                    })
                  : void 0,
            },
            t,
          );
        };
      t.default = f;
    },
    711: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = r(n(34));
      function d() {
        var e = (0, a.default)([
          '\n  background-color: ',
          ';\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n  padding-bottom: 20px;\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = u.default.View(
          d(),
          i.GREY_DARK,
          l.default.width / 18 + 'px',
          l.default.width / 18 + 'px',
        ),
        f = function (e) {
          var t = e.children;
          return o.default.createElement(c, null, t);
        };
      t.default = f;
    },
    712: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12);
      function l() {
        var e = (0, a.default)(['\n  flex: 1;\n  background-color: ', ';\n']);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var d = u.default.View(l(), i.DARK_GREY),
        c = function (e) {
          var t = e.children;
          return o.default.createElement(d, null, t);
        };
      t.default = c;
    },
    713: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(714)).default;
      t.default = a;
    },
    714: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8));
      function i() {
        var e = (0, a.default)(['']);
        return (
          (i = function () {
            return e;
          }),
          e
        );
      }
      function l() {
        var e = (0, a.default)(['']);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var d = u.default.View(l()),
        c = u.default.Text(i()),
        f = function (e) {
          e.navigation;
          return o.default.createElement(d, null, o.default.createElement(c, null, 'Header'));
        };
      t.default = f;
    },
    715: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(37)),
        l = n(42);
      function d() {
        var e = (0, a.default)(['\n  ', ';\n']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, a.default)(['\n  ', ';\n  width: ', ';\n  height: ', ';\n  left: ', ';\n']);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.default.Image(
          c(),
          l.marginStyles,
          function (e) {
            var t = e.imgWidth;
            return null != t ? t : '100%';
          },
          function (e) {
            var t = e.imgHeight;
            return null != t ? t : '100%';
          },
          function (e) {
            var t = e.left;
            return null != t ? t : '0px';
          },
        ),
        s = u.default.Image(d(), l.marginStyles),
        p = function (e) {
          var t = e.imgSrc,
            n = e.imgUrl,
            r = e.marginLeft,
            a = e.marginTop,
            u = e.marginBottom,
            l = e.marginRight,
            d = e.onPress,
            c = e.width,
            p = e.height,
            g = e.left,
            A = c
              ? o.default.createElement(f, {
                  resizeMode: 'contain',
                  source: t || { uri: n },
                  marginLeft: r,
                  marginTop: a,
                  marginBottom: u,
                  marginRight: l,
                  imgWidth: c,
                  imgHeight: p,
                  left: g,
                })
              : o.default.createElement(s, {
                  resizeMode: 'contain',
                  source: t || { uri: n },
                  marginLeft: r,
                  marginTop: a,
                  marginBottom: u,
                  marginRight: l,
                  left: g,
                });
          return d ? o.default.createElement(i.default, { onPress: d }, A) : A;
        };
      t.default = p;
    },
    717: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(718)).default;
      t.default = a;
    },
    718: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(22)),
        o = r(n(6)),
        u = r(n(1)),
        i = r(n(8)),
        l = n(42);
      function d() {
        var e = (0, o.default)([
          '\n  padding-bottom: 19px;\n  width: 100%;\n  background-color: transparent;\n  border: 1px;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  border-bottom-color: #ffffff;\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 17px;\n  ',
          '\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = i.default.TextInput(d(), l.marginStyles),
        f = function (e) {
          var t = e.inputBinder,
            n = e.marginLeft,
            r = e.marginTop,
            o = e.marginBottom,
            i = e.marginRight,
            l = e.placeholder,
            d = e.secureTextEntry,
            f = e.keyboardType;
          return u.default.createElement(
            c,
            (0, a.default)({}, t, {
              placeholder: l,
              placeholderTextColor: 'rgba(255, 255, 255, 0.6)',
              autoCapitalize: 'none',
              autoCorrect: !1,
              secureTextEntry: d,
              marginLeft: n,
              marginTop: r,
              marginBottom: o,
              marginRight: i,
              keyboardType: f,
            }),
          );
        };
      t.default = f;
    },
    719: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(42),
        l = n(12),
        d = r(n(37));
      function c() {
        var e = (0, a.default)([
          '\n  font-size: ',
          ';\n  color: ',
          ';\n  font-weight: ',
          ';\n  text-align: ',
          ';\n  ',
          ';\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.default.Text(
          c(),
          function (e) {
            var t = e.fontSize;
            return null != t ? t : '15px';
          },
          function (e) {
            var t = e.color;
            return null != t ? t : '' + l.LIGHT_GREY;
          },
          function (e) {
            var t = e.fontWeight;
            return null != t ? t : 'bold';
          },
          function (e) {
            var t = e.textAlign;
            return null != t ? t : 'left';
          },
          i.marginStyles,
        ),
        s = function (e) {
          var t = e.fontSize,
            n = e.color,
            r = e.text,
            a = e.marginLeft,
            u = e.marginTop,
            i = e.marginBottom,
            l = e.marginRight,
            c = e.fontWeight,
            s = e.onPress,
            p = e.textAlign,
            g = e.numberOfLines;
          return s
            ? o.default.createElement(
                d.default,
                { onPress: s },
                o.default.createElement(
                  f,
                  {
                    numberOfLines: null != g ? g : 100,
                    fontSize: t,
                    color: n,
                    marginLeft: a,
                    marginTop: u,
                    marginBottom: i,
                    marginRight: l,
                    textAlign: p,
                    fontWeight: c,
                  },
                  r,
                ),
              )
            : o.default.createElement(
                f,
                {
                  numberOfLines: null != g ? g : 100,
                  fontSize: t,
                  color: n,
                  marginLeft: a,
                  marginTop: u,
                  marginBottom: i,
                  marginRight: l,
                  textAlign: p,
                  fontWeight: c,
                },
                r,
              );
        };
      t.default = s;
    },
    720: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(42);
      function l() {
        var e = (0, a.default)([
          '\n  flex-direction: row;\n  ',
          ';\n  ',
          ';\n  align-items: ',
          ';\n  justify-content: ',
          ';\n  width: ',
          ';\n  height: ',
          ';\n  background-color: ',
          ';\n  border: ',
          ';\n  border-radius: ',
          ';\n',
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var d = u.default.View(
          l(),
          i.marginStyles,
          i.paddingStyles,
          function (e) {
            var t = e.align;
            return null != t ? t : 'center';
          },
          function (e) {
            var t = e.justifyContent;
            return null != t ? t : 'flex-start';
          },
          function (e) {
            var t = e.width;
            return null != t ? t : '100%';
          },
          function (e) {
            var t = e.height;
            return null != t ? t : 'auto';
          },
          function (e) {
            var t = e.bgColor;
            return null != t ? t : 'transparent';
          },
          function (e) {
            var t = e.border;
            return null != t ? t : 'none';
          },
          function (e) {
            var t = e.borderRadius;
            return null != t ? t : '0px';
          },
        ),
        c = function (e) {
          var t = e.marginLeft,
            n = e.marginTop,
            r = e.marginBottom,
            a = e.marginRight,
            u = e.paddingTop,
            i = e.paddingBottom,
            l = e.paddingLeft,
            c = e.paddingRight,
            f = e.align,
            s = e.width,
            p = e.border,
            g = e.borderRadius,
            A = e.justifyContent,
            m = e.children,
            v = e.height,
            O = e.bgColor;
          return o.default.createElement(
            d,
            {
              marginLeft: t,
              marginTop: n,
              marginBottom: r,
              marginRight: a,
              paddingTop: u,
              paddingBottom: i,
              paddingLeft: l,
              paddingRight: c,
              align: f,
              width: s,
              border: p,
              borderRadius: g,
              justifyContent: A,
              height: v,
              bgColor: O,
            },
            m,
          );
        };
      t.default = c;
    },
    721: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(42);
      function l() {
        var e = (0, a.default)([
          '\n  ',
          ';\n  ',
          ';\n  width: ',
          ';\n  height: ',
          ';\n  border: ',
          ';\n  border-radius: ',
          ';\n  align-items: ',
          ';\n  background-color: ',
          ';\n',
        ]);
        return (
          (l = function () {
            return e;
          }),
          e
        );
      }
      var d = u.default.View(
          l(),
          i.marginStyles,
          i.paddingStyles,
          function (e) {
            var t = e.width;
            return null != t ? t : 'auto';
          },
          function (e) {
            var t = e.height;
            return null != t ? t : 'auto';
          },
          function (e) {
            var t = e.border;
            return null != t ? t : 'none';
          },
          function (e) {
            var t = e.borderRadius;
            return null != t ? t : '0';
          },
          function (e) {
            var t = e.align;
            return null != t ? t : 'flex-start';
          },
          function (e) {
            var t = e.bgColor;
            return null != t ? t : 'transparent';
          },
        ),
        c = function (e) {
          var t = e.marginLeft,
            n = e.marginTop,
            r = e.marginBottom,
            a = e.marginRight,
            u = e.paddingTop,
            i = e.paddingBottom,
            l = e.paddingLeft,
            c = e.paddingRight,
            f = e.borderRadius,
            s = e.border,
            p = e.justifyContent,
            g = e.width,
            A = e.align,
            m = e.children,
            v = e.height,
            O = e.bgColor;
          return o.default.createElement(
            d,
            {
              justifyContent: p,
              marginLeft: t,
              marginTop: n,
              marginBottom: r,
              marginRight: a,
              paddingTop: u,
              paddingBottom: i,
              paddingLeft: l,
              paddingRight: c,
              borderRadius: f,
              border: s,
              width: g,
              height: v,
              align: A,
              bgColor: O,
            },
            m,
          );
        };
      t.default = c;
    },
    722: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = n(42),
        d = r(n(300));
      function c() {
        var e = (0, a.default)([
          '\n  justify-content: center;\n  align-items: center;\n  width: ',
          ';\n  height: ',
          ';\n  background-color: ',
          ';\n  border-radius: ',
          ';\n  ',
          ';\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.default.TouchableOpacity(
          c(),
          function (e) {
            var t = e.width;
            return null != t ? t : '100%';
          },
          function (e) {
            var t = e.height;
            return t && t;
          },
          function (e) {
            var t = e.bgColor;
            return null != t ? t : '' + i.DARK_GREY;
          },
          function (e) {
            var t = e.borderRadius;
            return t && t;
          },
          l.marginStyles,
        ),
        s = function (e) {
          var t = e.width,
            n = e.height,
            r = e.bgColor,
            a = e.color,
            u = e.fontSize,
            i = e.text,
            l = e.onPress,
            c = e.marginLeft,
            s = e.marginTop,
            p = e.marginBottom,
            g = e.marginRight,
            A = e.borderRadius,
            m = e.fontWeight;
          return o.default.createElement(
            f,
            {
              width: t,
              height: n,
              bgColor: r,
              onPress: l,
              marginLeft: c,
              marginTop: s,
              marginBottom: p,
              marginRight: g,
              borderRadius: A,
            },
            o.default.createElement(d.default, { color: a, text: i, fontSize: u, fontWeight: m }),
          );
        };
      t.default = s;
    },
    723: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(22)),
        o = r(n(6)),
        u = r(n(1)),
        i = r(n(8)),
        l = n(42),
        d = n(12);
      function c() {
        var e = (0, o.default)([
          '\n  width: 100%;\n  height: ',
          ';\n  padding: 20px 25px 20px 25px;\n  color: ',
          ';\n  background-color: transparent;\n  font-size: 17px;\n  border: 1px solid ',
          ';\n  border-radius: 15px;\n  ',
          ';\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = i.default.TextInput(
          c(),
          function (e) {
            var t = e.height;
            return null != t ? t : 'auto';
          },
          d.WHITE,
          d.WHITE,
          l.marginStyles,
        ),
        s = function (e) {
          var t = e.inputBinder,
            n = e.marginLeft,
            r = e.marginTop,
            o = e.marginBottom,
            i = e.marginRight,
            l = e.placeholder,
            d = e.secureTextEntry,
            c = e.keyboardType,
            s = e.multiline,
            p = e.height;
          return u.default.createElement(
            f,
            (0, a.default)({}, t, {
              placeholder: l,
              placeholderTextColor: '#999999',
              autoCapitalize: 'none',
              autoCorrect: !1,
              secureTextEntry: d,
              marginLeft: n,
              marginTop: r,
              marginBottom: o,
              marginRight: i,
              keyboardType: c,
              multiline: s,
              numberOfLines: 3,
              height: p,
            }),
          );
        };
      t.default = s;
    },
    724: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(725)),
        l = r(n(299));
      function d() {
        var e = (0, a.default)([
          '\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  width: 56px;\n  height: 56px;\n  border-radius: 28px;\n  background: #b029df;\n  box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.4);\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = u.default.TouchableOpacity(d()),
        f = function (e) {
          var t = e.navigate;
          return o.default.createElement(
            c,
            { onPress: t },
            o.default.createElement(l.default, {
              imgSrc: i.default,
              width: '27px',
              height: '27px',
            }),
          );
        };
      t.default = f;
    },
    725: function (e, t, n) {
      e.exports = n.p + 'static/media/pencil.50171143.png';
    },
    726: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(22)),
        o = r(n(6)),
        u = r(n(1)),
        i = r(n(8)),
        l = n(12);
      function d() {
        var e = (0, o.default)([
          '\n  padding: 22px;\n  font-size: ',
          ';\n  color: ',
          ';\n  font-weight: ',
          ';\n  line-height: ',
          ';\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function c() {
        var e = (0, o.default)([
          '\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 300px;\n  background-color: ',
          ';\n  border-radius: 25px;\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = i.default.View(c(), l.WHITE),
        s = i.default.TextInput(
          d(),
          function (e) {
            var t = e.fontSize;
            return null != t ? t : '12px';
          },
          function (e) {
            var t = e.color;
            return null != t ? t : 'black';
          },
          function (e) {
            var t = e.fontWeight;
            return null != t ? t : '12px';
          },
          function (e) {
            var t = e.lineHeight;
            return null != t ? t : 15;
          },
        ),
        p = function (e) {
          var t = e.textAreaBinder,
            n = e.fontSize,
            r = e.color,
            o = e.lineHeight,
            i = e.fontWeight;
          return u.default.createElement(
            f,
            null,
            u.default.createElement(
              s,
              (0, a.default)(
                {
                  underlineColorAndroid: 'transparent',
                  placeholder: 'something',
                  numberOfLines: 10,
                  multiline: !0,
                  placeholderTextColor: l.DARK_GREY,
                  fontSize: n,
                  color: r,
                  fontWeight: i,
                  lineHeight: o,
                },
                t,
              ),
            ),
          );
        };
      t.default = p;
    },
    727: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = r(n(728)),
        u = function (e) {
          var t = e.message,
            n = e.visible,
            r = e.animation,
            u = e.hideOnPress;
          return a.default.createElement(
            o.default,
            { visible: n, position: 50, shadow: !1, animation: r, hideOnPress: u },
            t,
          );
        };
      t.default = u;
    },
    737: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = n(16),
        i = r(n(738)),
        l = n(12);
      function d() {
        var e = (0, a.default)(['\n  width: 100%;\n']);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = r(n(8)).default.TouchableOpacity(d()),
        f = function (e) {
          var t = e.title,
            n = e.navigation;
          return o.default.createElement(
            u.Rowbox,
            null,
            o.default.createElement(
              c,
              {
                onPress: function () {
                  n.goBack();
                },
              },
              o.default.createElement(u.Image, { imgSrc: i.default }),
            ),
            o.default.createElement(u.Text, {
              text: t,
              fontWeight: 700,
              fontSize: '17px',
              marginLeft: '17px',
              color: l.WHITE,
            }),
          );
        };
      t.default = f;
    },
    738: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAQCAYAAAArij59AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB6SURBVHgBfZFRDcAgDAVhCiYBCTgCJ+AAHCEBCZOwOehKBlvTtHtJw8cdoS3WCAGAHY9utKDQ4MkhwbIgluMwTXhieQ4DfIkc+nlrJHPo5nsjVWqqT9iEgcyGdZm/sCeKJtEmkyZFMmbQpKwuikhVXTWR2pKsIrzffQMiDb0HrY7aQgAAAABJRU5ErkJggg==';
    },
    739: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(16),
        u = r(n(34)),
        i = n(12),
        l = r(n(740)),
        d = r(n(741)),
        c = r(n(742)),
        f = r(n(743)),
        s = r(n(744)),
        p = r(n(298)),
        g = function (e) {
          var t = e.ratingForPromotion,
            n = t.currentRating,
            r = (t.nextRating, t.postCountForPromotion),
            g = t.commentCountForPromotion,
            A = t.progress,
            m = t.message.split('\n');
          return a.default.createElement(
            a.default.Fragment,
            null,
            a.default.createElement(
              o.Rowbox,
              { marginTop: '20px' },
              a.default.createElement(
                o.Colbox,
                { marginBottom: '25px', marginTop: '15px' },
                a.default.createElement(o.Text, {
                  fontSize: '35px',
                  text: m[0],
                  fontWeight: 800,
                  color: i.WHITE,
                }),
                a.default.createElement(o.Text, {
                  fontSize: '35px',
                  text: m[1],
                  fontWeight: 100,
                  color: i.WHITE,
                }),
              ),
              a.default.createElement(o.Image, {
                imgSrc:
                  'ASSISTANT_MANAGE' === n
                    ? d.default
                    : 'DEPARTMENT_HEAD' === n
                    ? c.default
                    : 'MANAGING_DIRECTOR' === n
                    ? f.default
                    : 'BOSS' === n
                    ? s.default
                    : l.default,
                width: '110px',
                height: '110px',
                left: u.default.width / 4 + 'px',
              }),
            ),
            a.default.createElement(
              o.Colbox,
              { marginBottom: u.default.height / 30 + 'px' },
              a.default.createElement(p.default, {
                persentage: A,
                postCountForPromotion: r,
                commentCountForPromotion: g,
              }),
            ),
          );
        };
      t.default = g;
    },
    740: function (e, t, n) {
      e.exports = n.p + 'static/media/level_one_badge.eed6fb7b.png';
    },
    741: function (e, t, n) {
      e.exports = n.p + 'static/media/level_two_badge.d5472f01.png';
    },
    742: function (e, t, n) {
      e.exports = n.p + 'static/media/level_three_badge.42d047b7.png';
    },
    743: function (e, t, n) {
      e.exports = n.p + 'static/media/level_four_badge.baa5b493.png';
    },
    744: function (e, t, n) {
      e.exports = n.p + 'static/media/level_five_badge.7e00652f.png';
    },
    745: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = r(n(34)),
        d = n(16);
      function c() {
        var e = (0, a.default)([
          '\n  width: 100%;\n  padding-top: 15px;\n  align-items: center;\n  background-color: ',
          ';\n  border-top-left-radius: 50px;\n  border-top-right-radius: 50px;\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = (0, a.default)(['\n  background-color: ', ';\n']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var s = u.default.View(f(), i.DARK_GREY),
        p = u.default.View(
          c(),
          i.GREY_DARK,
          l.default.width / 18 + 'px',
          l.default.width / 18 + 'px',
        ),
        g = function (e) {
          var t = e.children;
          return o.default.createElement(
            s,
            null,
            o.default.createElement(
              p,
              null,
              o.default.createElement(d.Rowbox, {
                width: '44px',
                height: '6px',
                bgColor: i.LIGHT_DARK,
                borderRadius: '20px',
                marginBottom: '18px',
              }),
              t,
            ),
          );
        };
      t.default = g;
    },
    746: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(22)),
        u = a(n(14)),
        i = a(n(6)),
        l = r(n(1)),
        d = a(n(8)),
        c = n(12),
        f = n(16),
        s = a(n(303)),
        p = a(n(107)),
        g = n(29);
      function A() {
        var e = (0, i.default)([
          '\n  margin-top: 14px;\n  height: 100%;\n  height: 240px;\n  background-color: ',
          ';\n  border-radius: 25px;\n  overflow: hidden;\n',
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      var m = d.default.TouchableOpacity(A(), c.WHITE),
        v = function (e) {
          var t = e.nickname,
            n = e.createdDate,
            r = e.content,
            a = e.likes,
            i = e.commentCount,
            d = (e.pressBookMark, e.pressLike),
            A = e.rating,
            v = e.type,
            O = (e.id, e.onPress),
            E = (0, l.useState)({ fontSize: '35px', lineHeight: '40px' }),
            h = (0, u.default)(E, 2),
            S = h[0],
            b = h[1];
          return (
            (0, l.useLayoutEffect)(function () {
              r.length < 13
                ? b({ fontSize: '35px', lineHeight: '40px' })
                : r.length < 51
                ? b({ fontSize: '22px', lineHeight: '27px' })
                : b({ fontSize: '16px', lineHeight: '21px' });
            }, []),
            l.default.createElement(
              m,
              { onPress: O },
              l.default.createElement(
                f.Rowbox,
                {
                  justifyContent: 'space-between',
                  bgColor: 'best' !== v ? '#DDDDDD' : '#232323',
                  height: '46px',
                  paddingLeft: '20px',
                  paddingRight: '20px',
                },
                l.default.createElement(
                  f.Rowbox,
                  { width: 'auto' },
                  l.default.createElement(
                    f.Rowbox,
                    {
                      width: 'auto',
                      height: '21px',
                      paddingLeft: '7px',
                      paddingRight: '7px',
                      marginRight: '6px',
                      borderRadius: '15px',
                      bgColor: '#DF84FF',
                    },
                    l.default.createElement(f.Text, {
                      text: (0, g.getLevelType)(A),
                      fontSize: '12px',
                      fontWeight: 700,
                      color: c.WHITE,
                    }),
                  ),
                  l.default.createElement(f.Text, {
                    text: t,
                    fontSize: '16px',
                    fontWeight: 800,
                    color: 'best' !== v ? c.DARK_GREY : c.WHITE,
                  }),
                  l.default.createElement(
                    l.default.Fragment,
                    null,
                    'normal' !== v &&
                      l.default.createElement(f.Image, {
                        imgSrc: s.default,
                        marginLeft: '4px',
                        width: '12px',
                        height: '9px',
                      }),
                  ),
                ),
                l.default.createElement(f.Text, {
                  text: n,
                  fontSize: '12px',
                  fontWeight: 600,
                  marginLeft: '10px',
                  color: 'best' !== v ? c.DARK_GREY : c.WHITE,
                }),
              ),
              l.default.createElement(
                f.Colbox,
                { paddingLeft: '20px', paddingRight: '20px' },
                l.default.createElement(
                  f.Rowbox,
                  {
                    justifyContent: 'center',
                    align: 'center',
                    width: '100%',
                    height: '147px',
                    marginBottom: '9px',
                  },
                  l.default.createElement(
                    f.Text,
                    (0, o.default)({ text: r }, S, { color: c.DARK_GREY }),
                  ),
                ),
                l.default.createElement(p.default, {
                  pressLike: d,
                  heartCount: a,
                  commentCount: i,
                  heartWidth: '20px',
                  heartHeight: '20px',
                  commentWidth: '16px',
                  commentHeight: '20px',
                }),
              ),
            )
          );
        };
      t.default = v;
    },
    747: function (e, t, n) {
      e.exports = n.p + 'static/media/heart.451bf071.png';
    },
    748: function (e, t, n) {
      e.exports = n.p + 'static/media/empty_heart.c82f6de8.png';
    },
    749: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgB7VrLTcNAFJy3MYgjVySIkk7ogBrCDfFTqACoAIQQ13QAFQAdUEIMFEByQ+APbx0csEmADQHhnYxke21nlexk573ZZ8v9afoAYBGkMLr1QAyDlJ0AQQhimCRFH8SwEghBDCsB7hggCTkBMXsQRMBOwCO3BMTu1A6nIIV5PYYgxYAAYjuczwBuAhLgFqSYSSDbE5uhjABmO5zPAG4CjCGXwLPhnQGSN1jtsHnXppwFMwKGLdLa4JAAVjtsQI6ZBPKGsBPAiiEBrOXxtxlAWh5/I4C0PC7vTxjXA+UgGIIMRQIIa4NFAggzQYEAxrdFyhIIQYayBLhjAGN5vEAAox0uSoDQDtOvBqV84Z/a4TAzaZK91N2AG2zf7ribwcgO7l/ijsGAejb1isYeZb1fA7pRjL49D1SOjwvoNVsyDMzds7QRJLiBw9vtaYyD+o50xt0PME2MGFSimSWrNul1+wiupk+hljYkxARoar+7k7QlBueYEj4SMPixjdLVfAqGqplenOA2L6GN+7d+C/Vtubg/SY81eu1iChhFwIHd/nJQrogi7AfzWMMUpCqoKHQWrOosuMQXY9AY0PosBlQ2Da5sy7XKcA8/RKV9wPKWHKlcr/ADVN4IRTWs6+EBE6LyBNjUqOl2Yil4YYXrm9JR/9rBBPBmLRA/o62Hrms/bwhottWvJFk8cIJXq0GbGpWEI5c+3i2HlYS2S2r0sh7gkhq9JMCmRnWJh9/5rLcVocwl4utls9clsegJ6zL3eZ3zBfZkzBN7UN6PAAAAAElFTkSuQmCC';
    },
    750: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(34)),
        l = n(16),
        d = n(12),
        c = r(n(304));
      function f() {
        var e = (0, a.default)([
          '\n  justify-content: center;\n  align-items: center;\n  margin-top: 33px;\n  width: 55px;\n  height: 25px;\n  border-radius: 100px;\n  background-color: #b029df;\n',
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function s() {
        var e = (0, a.default)(['\n  flex: 3;\n']);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = (0, a.default)(['\n  flex: 1;\n  align-items: center;\n']);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, a.default)([
          '\n  flex-direction: row;\n  min-height: 120px;\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n  margin-bottom: 20px;\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function A() {
        var e = (0, a.default)(['']);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      var m = u.default.TouchableOpacity(A()),
        v = u.default.View(g(), i.default.width / 18 + 'px', i.default.width / 18 + 'px'),
        O = u.default.View(p()),
        E = u.default.View(s()),
        h = u.default.View(f()),
        S = function (e) {
          var t = e.onPress,
            n = e.type,
            r = e.content,
            a = e.description,
            u = e.createdAt;
          return o.default.createElement(
            m,
            { onPress: t, activeOpacity: 0.7 },
            o.default.createElement(
              v,
              null,
              o.default.createElement(
                O,
                null,
                o.default.createElement(
                  h,
                  null,
                  o.default.createElement(l.Text, {
                    text: n,
                    color: d.WHITE,
                    fontSize: '12px',
                    fontWeight: 800,
                  }),
                ),
              ),
              o.default.createElement(
                E,
                null,
                o.default.createElement(
                  l.Colbox,
                  { marginTop: '20px' },
                  o.default.createElement(l.Text, {
                    fontSize: '16px',
                    text: r,
                    fontWeight: 800,
                    color: d.WHITE,
                  }),
                  o.default.createElement(l.Text, {
                    fontSize: '14px',
                    text: a,
                    fontWeight: 300,
                    color: d.WHITE,
                    marginTop: '6px',
                  }),
                  o.default.createElement(l.Text, {
                    fontSize: '12px',
                    text: u,
                    fontWeight: 300,
                    color: d.WHITE,
                    marginTop: '14px',
                  }),
                ),
              ),
            ),
            o.default.createElement(c.default, { height: '1px', color: d.PURPLE }),
          );
        };
      t.default = S;
    },
    751: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(16),
        l = r(n(152));
      function d() {
        var e = (0, a.default)([
          '\n  flex: 1;\n  min-height: 30px;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 9px;\n  border-bottom-width: 4px;\n  border-bottom-color: ',
          ';\n',
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      var c = u.default.TouchableOpacity(d(), function (e) {
          var t = e.activationColor;
          return e.isActivation ? '' + t : 'transparent';
        }),
        f = function (e) {
          var t = e.imgSrc,
            n = e.text,
            r = e.fontWeight,
            a = e.fontSize,
            u = e.isActivation,
            d = e.activationColor,
            f = e.onPress;
          return o.default.createElement(
            c,
            { isActivation: u, activationColor: d, onPress: f },
            o.default.createElement(
              l.default,
              { imgSrc: t, direction: 'column', height: '20px', width: '20px' },
              o.default.createElement(i.Text, {
                text: n,
                fontWeight: r,
                fontSize: a,
                color: u ? d : void 0,
                marginTop: '15px',
              }),
            ),
          );
        };
      t.default = f;
    },
    752: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(22)),
        o = r(n(6)),
        u = r(n(1)),
        i = r(n(8)),
        l = n(16),
        d = n(84);
      function c() {
        var e = (0, o.default)([
          '\n  width: 100%;\n  background-color: #3a3a3a;\n  padding: ',
          ';\n  border: 2px solid ',
          ';\n  border-radius: 10px;\n  font-size: 17px;\n  margin-bottom: 10px;\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = i.default.TextInput(
          c(),
          (0, d.ifIphoneX)('14px 24px 14px 24px', '7px 12px 7px 12px'),
          function (e) {
            return e.isAvailable ? '#5f5f5f' : '#EA4040';
          },
        ),
        s = function (e) {
          var t = e.placeholder,
            n = e.onBlur,
            r = e.inputBinder,
            o = e.isAvailable,
            i = e.guideMsg,
            d = e.secureTextEntry,
            c = void 0 !== o && o;
          return u.default.createElement(
            l.Colbox,
            null,
            u.default.createElement(
              f,
              (0, a.default)(
                {
                  autoCapitalize: 'none',
                  autoCorrect: !1,
                  placeholder: t,
                  placeholderTextColor: 'red',
                  onBlur: n,
                  isAvailable: !c,
                  secureTextEntry: d,
                },
                r,
              ),
            ),
            u.default.createElement(
              u.default.Fragment,
              null,
              c &&
                i.length > 1 &&
                u.default.createElement(l.Text, {
                  text: i,
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#EA4040',
                  marginBottom: '10px',
                }),
            ),
          );
        };
      t.default = s;
    },
    753: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = n(16),
        i = n(12),
        l = r(n(8)),
        d = r(n(303)),
        c = r(n(754));
      function f() {
        var e = (0, a.default)(['']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var s = l.default.TouchableOpacity(f()),
        p = function (e) {
          var t = e.isPopular,
            n = e.handleIsPopular;
          return o.default.createElement(
            u.Rowbox,
            { width: '100%', justifyContent: 'space-between', paddingBottom: '10px' },
            o.default.createElement(u.Text, {
              text: '\uac1c\uadf8 \ubaa9\ub85d',
              fontSize: '18px',
              fontWeight: 700,
              color: i.WHITE,
            }),
            o.default.createElement(
              s,
              { onPress: n },
              o.default.createElement(
                u.Rowbox,
                {
                  borderRadius: '50px',
                  border: '1px solid #999999',
                  bgColor: '#5A5A5A',
                  width: '90px',
                  height: '27px',
                  justifyContent: 'center',
                },
                o.default.createElement(u.Text, {
                  text: '\uba85\uc608\uc758 \uc804\ub2f9',
                  fontSize: '12px',
                  fontWeight: 200,
                  color: t ? i.WHITE : '#999999',
                }),
                o.default.createElement(u.Image, {
                  imgSrc: t ? d.default : c.default,
                  marginLeft: '4px',
                  width: '12px',
                  height: '9px',
                }),
              ),
            ),
          );
        };
      t.default = p;
    },
    754: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAbCAYAAAAULC3gAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG3SURBVHgBzZffbcIwEMYvoULwlhEYATagkwAvIJ6gE0A3oE8IhBSYoHQCwgRlg9IJmucof/odDRFJ7ZAmqZyfFCWW7dPnO/t8ISqJ5XLZWq1WUyqITuUxxzNbr9dtKoBGJcDe0XX9I2ye6/V6ZzAY2JSDsjzUvfluOY4zo5yUIgjeSQqYbjabHuVAQ8zNIAgs3/eP4/H4TH8E4epDkCnosmGzk9Um7HTx6j94nvcJg1s8BHEnGOHv43A4PGUxhLETSZdRq9Ve8e7QHSEYN4NTutxmD7XReBeMPWuaZkHwDqu0ZMYg6EDpLEaj0ZNgbh9CelchVy6nDKIOyY4EfGIsPPvb0MIoe/PuXsGcR16UaZqG67oTtDlfGaKxWmh4LtiYUthzMLrHe5Fxig37izQhMUGsHEf1iyrA5dhzEuNVUwWI8hBi+0YVIBLUbDa39LN5lRIJCsOWKff8J7GrAznnmRQTE9RoNNhDSsMWE8RhQ4LckUJ+3fYQtCeFCAs0lKKcJA1SgLAeQop/IUXICjSLFCGtqRE2LkkKFex5kJawCJuSq0QqCDkpa2lRKlJBqiqA1L8OFRXAN0lCt/LfSQcaAAAAAElFTkSuQmCC';
    },
    755: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = n(16),
        d = r(n(305)),
        c = r(n(107)),
        f = n(42),
        s = n(29);
      function p() {
        var e = (0, a.default)([
          '\n  width: 100%;\n  height: 87px;\n  justify-content: space-between;\n  padding: 18px 18px 18px 18px;\n  background: ',
          ';\n  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.3);\n  border-radius: 25px;\n  ',
          ';\n',
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var g = u.default.TouchableOpacity(p(), i.WHITE, f.marginStyles),
        A = function (e) {
          var t = e.marginBottom,
            n = e.postOption,
            r = e.handleNavigateToPostDeatil,
            a = n.posts;
          return o.default.createElement(
            o.default.Fragment,
            null,
            a.length > 0
              ? a.map(function (e) {
                  return o.default.createElement(
                    g,
                    {
                      marginBottom: t,
                      key: (0, s.getUniqueKey)(e.id),
                      onPress: function () {
                        r(e.id);
                      },
                    },
                    o.default.createElement(
                      l.Rowbox,
                      { justifyContent: 'space-between' },
                      o.default.createElement(
                        l.Rowbox,
                        { width: '230px' },
                        o.default.createElement(l.Text, {
                          fontSize: '16px',
                          fontWeight: 800,
                          text: e.content,
                          color: '#333333',
                        }),
                      ),
                      o.default.createElement(
                        l.Rowbox,
                        { width: 'auto' },
                        e.pressBookMark &&
                          o.default.createElement(l.Image, {
                            imgSrc: d.default,
                            marginLeft: '4px',
                            width: '18px',
                            height: '18px',
                          }),
                      ),
                    ),
                    o.default.createElement(
                      l.Rowbox,
                      { justifyContent: 'space-between' },
                      o.default.createElement(c.default, {
                        pressLike: e.pressLike,
                        heartCount: e.likes,
                        commentCount: e.commentCount,
                        heartWidth: '20px',
                        heartHeight: '20px',
                        commentWidth: '16px',
                        commentHeight: '16px',
                      }),
                      o.default.createElement(l.Text, {
                        fontSize: '12px',
                        fontWeight: 300,
                        text: e.createdDate,
                      }),
                    ),
                  );
                })
              : o.default.createElement(o.default.Fragment, null),
          );
        };
      t.default = A;
    },
    756: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(16),
        u = n(12),
        i = r(n(757)),
        l = r(n(758)),
        d = r(n(759)),
        c = r(n(760)),
        f = r(n(761)),
        s = n(29),
        p = function (e) {
          var t = e.ratingForPromotion,
            n = e.nickname,
            r = t.currentRating;
          return a.default.createElement(
            o.Rowbox,
            { marginBottom: '40px', marginTop: '20px' },
            a.default.createElement(o.Image, {
              imgSrc:
                'ASSISTANT_MANAGE' === r
                  ? l.default
                  : 'DEPARTMENT_HEAD' === r
                  ? d.default
                  : 'MANAGING_DIRECTOR' === r
                  ? c.default
                  : 'BOSS' === r
                  ? f.default
                  : i.default,
              width: '92px',
              height: '72px',
              marginRight: '15px',
            }),
            a.default.createElement(
              o.Rowbox,
              { width: 'auto' },
              a.default.createElement(o.Text, {
                text: (0, s.getLevelType)(r),
                fontSize: '30px',
                fontWeight: 800,
                color: u.WHITE,
                marginRight: '7px',
              }),
              a.default.createElement(o.Text, {
                text: n + '\ub2d8',
                fontSize: '30px',
                fontWeight: 100,
                color: u.WHITE,
              }),
            ),
          );
        };
      t.default = p;
    },
    757: function (e, t, n) {
      e.exports = n.p + 'static/media/level_one_badge_type_one.4e3cf233.png';
    },
    758: function (e, t, n) {
      e.exports = n.p + 'static/media/level_two_badge_type_one.7135d0b1.png';
    },
    759: function (e, t, n) {
      e.exports = n.p + 'static/media/level_three_badge_type_one.204fb2ed.png';
    },
    760: function (e, t, n) {
      e.exports = n.p + 'static/media/level_four_badge_type_one.e82ba35f.png';
    },
    761: function (e, t, n) {
      e.exports = n.p + 'static/media/level_five_badge_type_one.c6435de9.png';
    },
    762: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(12),
        l = n(16),
        d = n(29);
      function c() {
        var e = (0, a.default)([
          '\n  padding-bottom: 16px;\n  border-bottom-color: ',
          ';\n  border-bottom-width: 1px;\n  margin-bottom: ',
          ';\n',
        ]);
        return (
          (c = function () {
            return e;
          }),
          e
        );
      }
      var f = u.default.TouchableOpacity(c(), i.WHITE, function (e) {
          var t = e.marginBottom;
          return null != t ? t : '0px';
        }),
        s = function (e) {
          var t = e.commentOption,
            n = e.marginBottom,
            r = e.handleNavigateToPostDeatil,
            a = t.commentList;
          return o.default.createElement(
            o.default.Fragment,
            null,
            (null == a ? void 0 : a.length) > 0
              ? a.map(function (e) {
                  return o.default.createElement(
                    f,
                    {
                      marginBottom: n,
                      onPress: function () {
                        r(e.postId);
                      },
                      key: (0, d.getUniqueKey)(e.id),
                    },
                    o.default.createElement(
                      l.Rowbox,
                      { justifyContent: 'space-between' },
                      o.default.createElement(
                        l.Rowbox,
                        { width: '80%' },
                        o.default.createElement(l.Text, {
                          fontWeight: 600,
                          fontSize: '16px',
                          text: e.content,
                          color: i.WHITE,
                        }),
                      ),
                      o.default.createElement(l.Text, {
                        fontWeight: 300,
                        fontSize: '11px',
                        text: e.createdDate,
                      }),
                    ),
                  );
                })
              : o.default.createElement(o.default.Fragment, null),
          );
        };
      t.default = s;
    },
    763: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAYAAACQ0cTtAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEfSURBVHgB7dbBDYIwFAbgV9JwdoQmMIAbiBOgE+gIjoATGCewBwbQCUQn0A26gkcSQP+n1ODBiEa82D8hpTzoV/HAE0qpnpSyTx2nKIqDZKiqqi11n6FsTGZAj/TleJ7Hb23B53eMIWNMRl9OGIa89g2mH8ZhDnOYwxzmsL/DkiS5fnk/jXx1AwNpmpLv+0Jr3UNPMQmCYIDSuizLHVoJQy0j2wJ5nscYI5TPyAnjCHMCnOFct4EfMH5FzwA0LUYIMceYcWOEfrOP2hTzGNd1G1gAiLhvxDHGAwoPxti5/QUZ5nsLPNtxDY9wP8PXhhejhQVqK6wxvGO8ON0EC+h3/o8GrLA4b3hqYQ5jsga2KGxwYfMJ0Ez9/JKPBhxx7QI7xLKmTVMxlgAAAABJRU5ErkJggg==';
    },
    764: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAeCAYAAAAPSW++AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB7SURBVHgBzZDLDYAgEEQZ6oJatAO1ArUCtQOthc+VjsBdgokh8SzvsstLNkwGgnDOzTHGkXcAp1JqgrV2o3eWDymlVdLsRQVdDVJ8IOnsqCW5C7wYY3YaXfGH1noRTZLj/t0V/9OVMI10FULgZHg7eO9BubmrIYsWuroBRIdbKNC64NAAAAAASUVORK5CYII=';
    },
    765: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = r(n(307)),
        u = n(12),
        i = n(16),
        l = function (e) {
          var t = e.content,
            n = e.createdDate,
            r = (e.id, e.modifiedDate, e.postId, e.writer);
          return a.default.createElement(
            i.Rowbox,
            { marginBottom: '20px', width: '100%' },
            a.default.createElement(
              i.Colbox,
              { marginRight: '9px', width: 'auto' },
              a.default.createElement(i.Image, {
                imgSrc: o.default,
                height: '26px',
                width: '27px',
              }),
            ),
            a.default.createElement(
              i.Colbox,
              { width: '88%' },
              a.default.createElement(i.Text, {
                text: r.nickname,
                fontSize: '15px',
                fontWeight: 800,
                color: u.WHITE,
                marginBottom: '3px',
              }),
              a.default.createElement(
                i.Rowbox,
                { justifyContent: 'space-between' },
                a.default.createElement(i.Text, {
                  text: t,
                  fontSize: '15px',
                  fontWeight: 300,
                  color: u.WHITE,
                }),
                a.default.createElement(i.Text, {
                  text: n,
                  fontSize: '15px',
                  fontWeight: 300,
                  color: u.WHITE,
                }),
              ),
            ),
          );
        };
      t.default = l;
    },
    766: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(22)),
        o = r(n(6)),
        u = r(n(1)),
        i = n(767),
        l = r(n(8)),
        d = n(12),
        c = r(n(773)),
        f = n(16),
        s = r(n(34));
      function p() {
        var e = (0, o.default)(['\n  position: absolute;\n  right: 25px;\n']);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = (0, o.default)([
          '\n  height: 50px;\n  width: 100%;\n  padding-left: ',
          ';\n  padding-right: ',
          ';\n  font-size: 17px;\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      var A = l.default.TextInput(g(), s.default.width / 18 + 'px', s.default.width / 18 + 'px'),
        m = l.default.View(p()),
        v = function (e) {
          var t = e.inputRef,
            n = e.inputBinder,
            r = e.onPress;
          return u.default.createElement(
            i.KeyboardAccessoryView,
            { alwaysVisible: !0 },
            u.default.createElement(
              f.Rowbox,
              { height: '56px', bgColor: d.WHITE },
              u.default.createElement(
                A,
                (0, a.default)(
                  {
                    ref: t,
                    placeholder: '\ub313\uae00\ub2ec\uae30',
                    placeholderTextColor: '#999999',
                  },
                  n,
                ),
              ),
              u.default.createElement(
                m,
                null,
                u.default.createElement(f.Image, {
                  imgSrc: c.default,
                  width: '28px',
                  height: '28px',
                  onPress: r,
                }),
              ),
            ),
          );
        };
      t.default = v;
    },
    773: function (e, t, n) {
      e.exports = n.p + 'static/media/comment_push.a436c9fe.png';
    },
    774: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = n(16),
        i = r(n(304)),
        l = n(12),
        d = r(n(775)),
        c = r(n(37));
      function f() {
        var e = (0, a.default)(['\n  width: 100%;\n  justify-content: space-between;\n']);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      var s = r(n(8)).default.View(f()),
        p = function (e) {
          var t = e.title,
            n = e.handleLogout;
          return o.default.createElement(
            c.default,
            { onPress: n },
            o.default.createElement(
              s,
              null,
              o.default.createElement(
                u.Colbox,
                null,
                o.default.createElement(
                  u.Rowbox,
                  { width: '100%', justifyContent: 'space-between', marginBottom: '16px' },
                  o.default.createElement(u.Text, {
                    text: t,
                    fontSize: '16px',
                    fontWeight: 800,
                    color: l.WHITE,
                  }),
                  o.default.createElement(u.Image, {
                    imgSrc: d.default,
                    width: '8px',
                    height: '16px',
                  }),
                ),
                o.default.createElement(i.default, { color: l.WHITE, marginBottom: '16px' }),
              ),
            ),
          );
        };
      t.default = p;
    },
    775: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABICAYAAACECrc3AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7drRDYIwEIDhwwkcgQ1kBTdys45QR3ADR8ANzms8Ex4kFh7aC/n/5EJCePgCLU8VsVR1tMk2s35K5Z5EyHFf2LJyb5Le+dtaqz9S/9cXqb8/bxykb46a+iB1fZOEQk4gQYIECRIkSJAgQYIECRIkSJCHQj5tztK6jcjbSRo3DMPDLlebV8Xjl+bArTUH+uLPNjXr6y4t27FJRmmVRv7NgAMHDhw4cODAgQMHDhw4cOD248awOAemsDgHxsU5cA6Lc2AOi3Ng7EO2JUemBSxrkGPKb9Mr1lwYAEc7AAAAAElFTkSuQmCC';
    },
    776: function (e, t, n) {
      e.exports = n.p + 'static/media/bell_notification.cbe59822.png';
    },
    777: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(19)),
        u = a(n(13)),
        i = a(n(14)),
        l = a(n(6)),
        d = r(n(1)),
        c = a(n(8)),
        f = a(n(105)),
        s = a(n(7)),
        p = a(n(37)),
        g = n(154),
        A = n(48),
        m = n(55),
        v = n(29),
        O = n(50),
        E = n(85),
        h = n(64),
        S = n(108);
      function b(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function P(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? b(Object(n), !0).forEach(function (t) {
                (0, u.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : b(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      function _() {
        var e = (0, l.default)(['']);
        return (
          (_ = function () {
            return e;
          }),
          e
        );
      }
      var y = c.default.ScrollView(_()),
        C = function (e) {
          var t = e.navigation,
            n = (0, O.useDispatch)(),
            r = (0, O.useSelector)(function (e) {
              return e;
            }),
            a = r.auth.user.id,
            u = r.user.notification.detailedNoticeList,
            l = (0, d.useState)(!1),
            c = (0, i.default)(l, 2),
            b = c[0],
            _ = c[1];
          return (
            (0, d.useLayoutEffect)(function () {
              'web' === s.default.OS &&
                t.setOptions({
                  headerLeft: function () {
                    return d.default.createElement(
                      p.default,
                      {
                        onPress: function () {
                          t.goBack();
                        },
                      },
                      d.default.createElement(g.FontAwesome5, {
                        name: 'arrow-left',
                        size: 20,
                        color: 'white',
                      }),
                    );
                  },
                  headerLeftContainerStyle: { paddingLeft: 20 },
                });
            }, []),
            d.default.createElement(
              A.BackgroundContainer,
              null,
              d.default.createElement(
                y,
                {
                  refreshControl: d.default.createElement(f.default, {
                    tintColor: '#f8f8ff',
                    refreshing: b,
                    onRefresh: function () {
                      var e = P(P({}, h.getNotifications), {}, { userId: a });
                      n((0, S.getNotificationsThunk)(e));
                    },
                  }),
                },
                u.length > 0 &&
                  u.map(function (e) {
                    var r = e.message,
                      a = e.noticeId,
                      u = e.noticeType,
                      i = e.detailedPost,
                      l = e.createdDate;
                    return d.default.createElement(m.NotiCard, {
                      onPress: function () {
                        !(function (e) {
                          var r, a, u;
                          o.default.async(
                            function (i) {
                              for (;;)
                                switch ((i.prev = i.next)) {
                                  case 0:
                                    return (
                                      (r = P(
                                        P({}, h.getCommnets),
                                        {},
                                        { postId: e, currentPage: 1, size: 200 },
                                      )),
                                      (a = P(P({}, h.getDetailedPost), {}, { postId: e })),
                                      (i.next = 4),
                                      o.default.awrap(n((0, E.getCommentsThunk)(r)))
                                    );
                                  case 4:
                                    return (
                                      (i.next = 6), o.default.awrap(n((0, E.getPostDetailThunk)(a)))
                                    );
                                  case 6:
                                    (u = function (e, t) {
                                      var r;
                                      return o.default.async(
                                        function (a) {
                                          for (;;)
                                            switch ((a.prev = a.next)) {
                                              case 0:
                                                return (
                                                  _(!0),
                                                  (r = P(
                                                    P({}, h.postComment),
                                                    {},
                                                    { comment: t, postId: e },
                                                  )),
                                                  (a.next = 4),
                                                  o.default.awrap(n((0, E.postCommentThunk)(r)))
                                                );
                                              case 4:
                                                _(!1);
                                              case 5:
                                              case 'end':
                                                return a.stop();
                                            }
                                        },
                                        null,
                                        null,
                                        null,
                                        Promise,
                                      );
                                    }),
                                      t.navigate('PostDetail', { handlePostCommnet: u });
                                  case 8:
                                  case 'end':
                                    return i.stop();
                                }
                            },
                            null,
                            null,
                            null,
                            Promise,
                          );
                        })(i.id);
                      },
                      type: 'COMMENT' === u ? '\ub313\uae00' : '\uc88b\uc544\uc694',
                      content: i.content,
                      description: r,
                      createdAt: l,
                      key: (0, v.getUniqueKey)(a),
                    });
                  }),
              ),
            )
          );
        };
      t.default = C;
    },
    85: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.getPopularPostsThunk = t.postBookmarkThunk = t.postLikeThunk = t.postCommentThunk = t.postCreateContentThunk = t.getCommentsThunk = t.getPostDetailThunk = t.getPostsThunk = void 0);
      var a = r(n(153)),
        o = r(n(102)),
        u = n(136),
        i = (0, a.default)(u.loadPostsRequestAsync, o.default);
      t.getPostsThunk = i;
      var l = (0, a.default)(u.loadPostDetailRequestAsync, o.default);
      t.getPostDetailThunk = l;
      var d = (0, a.default)(u.loadCommentsRequestAsync, o.default);
      t.getCommentsThunk = d;
      var c = (0, a.default)(u.createPostRequestAsync, o.default);
      t.postCreateContentThunk = c;
      var f = (0, a.default)(u.postCommentRequestAsync, o.default);
      t.postCommentThunk = f;
      var s = (0, a.default)(u.postLikeRequestAsync, o.default);
      t.postLikeThunk = s;
      var p = (0, a.default)(u.postBookmarkRequestAsync, o.default);
      t.postBookmarkThunk = p;
      var g = (0, a.default)(u.loadPopularPostsRequestAsync, o.default);
      t.getPopularPostsThunk = g;
    },
    88: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }),
        Object.defineProperty(t, 'useHandleInput', {
          enumerable: !0,
          get: function () {
            return a.default;
          },
        }),
        Object.defineProperty(t, 'useToggle', {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(t, 'usePrevious', {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        });
      var a = r(n(938)),
        o = r(n(939)),
        u = r(n(940));
    },
    929: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(930)).default;
      t.default = a;
    },
    930: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(19)),
        u = a(n(13)),
        i = a(n(14)),
        l = r(n(1)),
        d = a(n(37)),
        c = a(n(7)),
        f = n(50),
        s = n(154),
        p = a(n(931)),
        g = n(64),
        A = n(85),
        m = n(101),
        v = n(108),
        O = a(n(932)),
        E = a(n(933)),
        h = a(n(934)),
        S = a(n(935)),
        b = a(n(936)),
        P = a(n(937)),
        _ = n(55),
        y = n(88);
      function C(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? C(Object(n), !0).forEach(function (t) {
                (0, u.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : C(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var x = function (e) {
        var t = e.navigation,
          n = (0, f.useDispatch)(),
          r = (0, f.useSelector)(function (e) {
            return e;
          }),
          a = r.auth.user,
          u = a.id,
          C = a.nickname,
          x = r.user,
          R = x.myComment,
          I = x.myPost,
          L = x.myBookmark,
          k = x.ratingForPromotion,
          w = (0, y.usePrevious)({ myBookmark: L }),
          M = (0, l.useState)(!1),
          D = (0, i.default)(M, 2),
          j = (D[0], D[1]),
          B = (0, l.useState)(1),
          U = (0, i.default)(B, 2),
          N = U[0],
          F = U[1],
          K = (0, l.useState)([
            {
              id: 1,
              isActivation: !0,
              name: '\uc791\uc131\ud55c \uac1c\uadf8',
              inactivationIcon: b.default,
              activationIcon: P.default,
            },
            {
              id: 2,
              isActivation: !1,
              name: '\uc791\uc131\ud55c \ub313\uae00 ',
              inactivationIcon: h.default,
              activationIcon: S.default,
            },
            {
              id: 3,
              isActivation: !1,
              name: '\ubd81\ub9c8\ud06c',
              inactivationIcon: O.default,
              activationIcon: E.default,
            },
            {
              id: 4,
              isActivation: !1,
              name: '\uc124\uc815',
              inactivationIcon: h.default,
              activationIcon: S.default,
            },
          ]),
          H = (0, i.default)(K, 2),
          Y = H[0],
          V = H[1],
          G = function (e) {
            var r, a, u, i, l, d;
            return o.default.async(
              function (c) {
                for (;;)
                  switch ((c.prev = c.next)) {
                    case 0:
                      return (
                        (r = T(T({}, g.getCommnets), {}, { postId: e, currentPage: 1, size: 200 })),
                        (a = T(T({}, g.getDetailedPost), {}, { postId: e })),
                        (c.next = 4),
                        o.default.awrap(n((0, A.getCommentsThunk)(r)))
                      );
                    case 4:
                      return (
                        (u = c.sent), (c.next = 7), o.default.awrap(n((0, A.getPostDetailThunk)(a)))
                      );
                    case 7:
                      (i = c.sent),
                        (l = { post: i, comment: u }),
                        (d = function (e, t) {
                          var r = T(T({}, g.postComment), {}, { comment: t, postId: e });
                          n((0, A.postCommentThunk)(r));
                        }),
                        t.navigate('PostDetail', T(T({}, l), {}, { handlePostCommnet: d }));
                    case 11:
                    case 'end':
                      return c.stop();
                  }
              },
              null,
              null,
              null,
              Promise,
            );
          },
          W = function () {
            n((0, m.logout)());
          };
        return (
          (0, l.useEffect)(
            function () {
              JSON.stringify(null == w ? void 0 : w.myBookmark) !== JSON.stringify(L) &&
                ((function () {
                  j(!0);
                  var e = T(T({}, g.getMyBookmarkPosts), {}, { userId: u });
                  n((0, v.getMyBookmarkPostsThunk)(e)), j(!1);
                })(),
                (function () {
                  j(!0);
                  var e = T(T({}, g.getMyPosts), {}, { userId: u });
                  n((0, v.getMyPostsThunk)(e)), j(!1);
                })());
            },
            [L],
          ),
          (0, l.useLayoutEffect)(function () {
            'web' === c.default.OS &&
              t.setOptions({
                headerLeft: function () {
                  return l.default.createElement(
                    d.default,
                    {
                      onPress: function () {
                        t.goBack();
                      },
                    },
                    l.default.createElement(s.FontAwesome5, {
                      name: 'arrow-left',
                      size: 20,
                      color: 'white',
                    }),
                  );
                },
                headerLeftContainerStyle: { paddingLeft: 20 },
              });
          }, []),
          l.default.createElement(p.default, {
            handleNavigateToPostDeatil: G,
            ratingForPromotion: k,
            nickname: C,
            handleLogout: W,
            myComment: R,
            myPost: I,
            myBookmark: L,
            tabNavOptions: Y,
            handleNavigation: function (e) {
              F(e);
              var t = Y.map(function (t) {
                return t.id === e
                  ? T(T({}, t), {}, { isActivation: !0 })
                  : T(T({}, t), {}, { isActivation: !1 });
              });
              V(t);
            },
            number: N,
            handleNavi: function (e) {
              return 1 === e
                ? l.default.createElement(_.MiniPostCard, {
                    postOption: I,
                    handleNavigateToPostDeatil: G,
                    marginBottom: '20px',
                  })
                : 2 === e
                ? l.default.createElement(_.CommentLog, {
                    commentOption: R,
                    handleNavigateToPostDeatil: G,
                    marginBottom: '16px',
                  })
                : 3 === e
                ? l.default.createElement(_.MiniPostCard, {
                    postOption: L,
                    handleNavigateToPostDeatil: G,
                    marginBottom: '20px',
                  })
                : l.default.createElement(_.UnderBarArrow, {
                    title: '\ub85c\uadf8\uc544\uc6c3',
                    handleLogout: W,
                  });
            },
          })
        );
      };
      t.default = x;
    },
    931: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(48),
        u = n(16),
        i = n(12),
        l = n(55),
        d = n(29),
        c = function (e) {
          var t = e.ratingForPromotion,
            n = e.nickname,
            r = e.tabNavOptions,
            c = e.handleNavigation,
            f = e.number,
            s = e.handleNavi;
          return a.default.createElement(
            o.BackgroundContainer,
            { bgColor: i.GREY_DARK },
            a.default.createElement(
              o.SafeAreaContainer,
              null,
              a.default.createElement(
                o.StickyScrollView,
                { stickyPosition: 1 },
                a.default.createElement(
                  o.SectionWrapper,
                  { bgColor: i.DARK_GREY, paddingBottom: '20px' },
                  a.default.createElement(l.ProfileSentence, {
                    ratingForPromotion: t,
                    nickname: n,
                  }),
                  a.default.createElement(
                    u.Rowbox,
                    { justifyContent: 'space-between' },
                    r.map(function (e) {
                      var t = e.isActivation,
                        n = e.activationIcon,
                        r = e.inactivationIcon,
                        o = e.id,
                        u = e.name;
                      return a.default.createElement(l.BottomLineTabNavi, {
                        text: u,
                        fontWeight: 500,
                        fontSize: '13px',
                        onPress: function () {
                          c(o);
                        },
                        imgSrc: t ? n : r,
                        isActivation: t,
                        activationColor: i.PURPLE,
                        key: (0, d.getUniqueKey)(o),
                      });
                    }),
                  ),
                ),
                a.default.createElement(l.DeviceHeaderSticky, null),
                a.default.createElement(o.DeviceSection, null, s(f)),
              ),
            ),
          );
        };
      t.default = c;
    },
    932: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABlSURBVHgB7YyxDYAwDARjhwEYgRHYgBFYgTYDRbJLRmCDbAKbGCMaN1aKtD7J8kuvP2BmSQNgGiQEIQjBz+QVIvLou/TPiLhpXrqCb6R3amyllGa7Wuuacz4AYLcyIKLbG3lY2QvvayOZ/LHjZQAAAABJRU5ErkJggg==';
    },
    933: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAARCAYAAADUryzEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABlSURBVHgB7ZSxDYAwDATfEQMwApRQsQEjIDZgNSYANsgYdM4kMZZo3AQhpfU1lvX6K5/OgQUVBFTiAhe44KX5yJIgXwC1BJr17/4Ikgh2vXG9+2iDY+QJkjdCWKyMdA+4VCphZQ+4Qx5zPzM4uQAAAABJRU5ErkJggg==';
    },
    934: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFVSURBVHgBnVS7TsQwEBxHiBPSAR2vBqpUVCCoqaiOT0B83vXoGv4BOqrQcA05SsgJ6VIQZsnaGMcOIiNNnNizk/VjbdCDpmku2ORe19wYc5fSZ0HwJukH7wf6HdWNyGPR+4PGN2IzIaWtyHVyhC5krCG39H3GbCtnFhj9F87QTvNwoBE07ns5rFlBvmMYKmYl8ViTBz9qTtVEhC/kA7kkx+QZuRdo3Loamlyy3SU3AtGCP7kN3am/QneXZd1KmeZRxEhwjzhi/bJueYY0qkT/MhXQZ5ba3TF6zIpEFqeJmPNI3wf57FfADbonfoF2jSrN9IQ8CDQyNuVmtUdDUUfM5BhM0I9PtKVXZ5pVjuEVsA29WewGlEjv3l+QuLkz06qf4cfwDWnzlTfWvTUs9PaQon+iYMXva/w+0FKHU9XK1Epr5DKzkAHyUYy06zXIqvS0hW8k+ALHFnHR2HS47wAAAABJRU5ErkJggg==';
    },
    935: function (e, t) {
      e.exports =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHsSURBVHgBnZTPStxQFMa/E6dUu5pF123SjTW0iy7aTQulFkoXhSZ01UUpbR+iD1C6FXSpKLp1oXGjLoQR9AEEhUQQk3HhLBRUFGcz5nhuMslM/gnOB8m9c+85P77JPecS7tCyebhBTB+T3wzM2a7xpyq+lkl+7usa8P6rZyzE2fQqG87jUZzu17UR/AwZK7ZnBMku9YOI0JCpLk8gO3WxUi8xkCSruH1mfE6AVAK6r1Kg1vVnDQhSGgVpb9Qkhj3EvLxPMZgC2326mMLsHeNchqtCGGNT/sIHeYxoBB8UQojbyZycMX9ZxnfyPM5yaMl29W/ZNaYVs7kF5rd5d2LLUc6sPChSh//llwgkBof+oygdISwNFRp5UDsq3Qg7blVOJewaoVm2PgTtBaph4ar4b+Y3iG/+5tfUNwspnCqu41hea1HRNnR/+OIRWiUV7zB3JqXrAplLYdOEpOZaDIHlGkbXGSB1MSygcxRlEdUa0h1+3CEFkBwsnzijHlKYFO13DNgB4va1AH71YIQ19Br4vvIutfZ6ClNNqiq8D7iLCrgcQksGP5oqENrjP1yzFXvqk7o9hP/J8p7MqAJ1TP+s/1AEtGe7z16qU3XGmr+vcL2agJQyl2P3XppOk5m3BfqlF0EbsQNiuJjNu74Frrm4LPALVIwAAAAASUVORK5CYII=';
    },
    936: function (e, t, n) {
      e.exports = n.p + 'static/media/navi_pencil_grey.11d05f4d.png';
    },
    937: function (e, t, n) {
      e.exports = n.p + 'static/media/navi_pencil_purple.c25202fd.png';
    },
    938: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(14)),
        o = n(1),
        u = function (e, t) {
          var n = (0, o.useState)(e),
            r = (0, a.default)(n, 2),
            u = r[0],
            i = r[1];
          return {
            bind: {
              text: u,
              onChange: function (e) {
                var n = e.nativeEvent.text;
                t ? t(n) && i(n) : i(n);
              },
            },
            setText: i,
          };
        };
      t.default = u;
    },
    939: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(14)),
        o = n(1),
        u = function (e, t) {
          var n = (0, o.useState)(e),
            r = (0, a.default)(n, 2),
            u = r[0],
            i = r[1];
          return {
            isAvailable: u,
            onToggle: function () {
              var e = t();
              i(e);
            },
          };
        };
      t.default = u;
    },
    940: function (e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var r = n(1),
        a = function (e) {
          var t = (0, r.useRef)();
          return (
            (0, r.useEffect)(function () {
              t.current = e;
            }),
            t.current
          );
        };
      t.default = a;
    },
    941: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(942)).default;
      t.default = a;
    },
    942: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(13)),
        u = r(n(1)),
        i = n(16),
        l = n(12),
        d = a(n(34)),
        c = n(88),
        f = a(n(943)),
        s = n(64),
        p = n(50),
        g = n(85);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = function (e) {
        var t = e.navigation,
          n = (0, p.useDispatch)(),
          r = (0, c.useHandleInput)('').bind,
          a = function () {
            var e = m(m({}, s.postCreateContent), {}, { content: r.text });
            n((0, g.postCreateContentThunk)(e)), t.navigate('Home');
          };
        return (
          (0, u.useLayoutEffect)(
            function () {
              t.setOptions({
                headerRight: function () {
                  return u.default.createElement(i.Text, {
                    onPress: a,
                    text: '\uc644\ub8cc',
                    color: l.WHITE,
                    fontSize: '16px',
                    fontWeight: 700,
                  });
                },
                headerRightContainerStyle: { paddingRight: d.default.width / 18 },
              });
            },
            [t, r.text],
          ),
          u.default.createElement(f.default, { textAreaBinder: r })
        );
      };
      t.default = v;
    },
    943: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(48),
        u = n(16),
        i = function (e) {
          var t = e.textAreaBinder;
          return a.default.createElement(
            o.BackgroundContainer,
            null,
            a.default.createElement(
              o.SectionWrapper,
              null,
              a.default.createElement(u.TextArea, {
                textAreaBinder: t,
                fontWeight: 800,
                fontSize: '22px',
                lineHeight: '27px',
              }),
            ),
          );
        };
      t.default = i;
    },
    944: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(945)).default;
      t.default = a;
    },
    945: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(13)),
        u = a(n(14)),
        i = r(n(1)),
        l = a(n(7)),
        d = a(n(37)),
        c = n(50),
        f = n(946),
        s = n(154),
        p = n(88),
        g = n(64),
        A = n(85),
        m = n(29),
        v = a(n(947)),
        O = n(137),
        E = n(136);
      function h(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function S(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var b = function (e) {
        var t = e.navigation,
          n = e.route.params.handlePostCommnet,
          r = (0, c.useDispatch)(),
          a = (0, c.useSelector)(function (e) {
            return e;
          }),
          o = a.loading['post/POST_COMMENT_LOADING'],
          h = a.post.postDetail,
          b = h.comment.commentList,
          P = h.post,
          _ = a.auth,
          y = _.accessToken.token,
          C = (_.user.id, (0, f.useKeyboard)()),
          T = (0, u.default)(C, 1)[0],
          x = (0, p.useHandleInput)('').bind,
          R = (0, i.useState)(!1),
          I = (0, u.default)(R, 2),
          L = I[0],
          k = I[1],
          w = (0, i.createRef)();
        return (
          (0, i.useEffect)(
            function () {
              o &&
                (setTimeout(function () {
                  k(!0);
                }, 200),
                setTimeout(function () {
                  k(!1);
                }, 3e3));
            },
            [o],
          ),
          (0, i.useLayoutEffect)(function () {
            'web' === l.default.OS &&
              t.setOptions({
                headerLeft: function () {
                  return i.default.createElement(
                    d.default,
                    {
                      onPress: function () {
                        t.goBack();
                      },
                    },
                    i.default.createElement(s.FontAwesome5, {
                      name: 'arrow-left',
                      size: 20,
                      color: 'white',
                    }),
                  );
                },
                headerLeftContainerStyle: { paddingLeft: 20 },
              });
          }, []),
          i.default.createElement(v.default, {
            showPostCommentToast: L,
            keyboardHeigth: T,
            post: P,
            handlePressLike: function (e) {
              r((0, E.activationLike)(e));
              var t = S(S({}, g.postLike), {}, { postId: e });
              r((0, A.postLikeThunk)(t));
            },
            handlePressBookmark: function (e) {
              r((0, E.activationBookmark)(e));
              var t = S(S({}, g.postBookmark), {}, { postId: e });
              r((0, A.postBookmarkThunk)(t));
            },
            handlePressDeleteBookmark: function (e) {
              var t = S(S({}, g.deleteBookmark), {}, { postId: e, headers: { accessToken: y } }),
                n = S(S({}, g.getDetailedPost), {}, { postId: e });
              (0, m.callApi)(t), r((0, A.getPostDetailThunk)(n)), r((0, O.removeBookmark)(e));
            },
            commentList: b,
            inputRef: w,
            commentBinder: x,
            handleOnPress: function () {
              var e, t;
              n(P.detailedPost.id, x.text),
                'ios' === l.default.OS
                  ? null == (e = w.current) || e.setNativeProps({ text: '' })
                  : null == (t = w.current) || t.clear();
            },
          })
        );
      };
      t.default = b;
    },
    947: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = n(48),
        l = r(n(306)),
        d = n(16),
        c = n(55),
        f = n(29);
      function s() {
        var e = (0, a.default)(['']);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      var p = u.default.ScrollView(s()),
        g = function (e) {
          var t = e.showPostCommentToast,
            n = e.keyboardHeigth,
            r = e.post,
            a = e.handlePressLike,
            u = e.handlePressBookmark,
            s = e.handlePressDeleteBookmark,
            g = e.commentList,
            A = e.inputRef,
            m = e.commentBinder,
            v = e.handleOnPress;
          return o.default.createElement(
            i.NoSafeArea,
            null,
            o.default.createElement(d.Toast, {
              visible: t,
              animation: !0,
              hideOnPress: !0,
              message: '\ub313\uae00 \uc791\uc131 \uc644\ub8cc',
            }),
            o.default.createElement(
              p,
              { style: { marginBottom: n } },
              o.default.createElement(
                i.SectionWrapper,
                { justifyContent: 'flex-start' },
                o.default.createElement(l.default, {
                  postDetailProps: r,
                  handlePressLike: a,
                  handlePressBookmark: u,
                  handlePressDeleteBookmark: s,
                }),
                o.default.createElement(
                  d.Colbox,
                  { marginTop: '15px' },
                  g.length > 0 &&
                    g.map(function (e) {
                      var t = e.id,
                        n = e.content,
                        r = e.createdDate,
                        a = e.modifiedDate,
                        u = e.postId,
                        i = e.writer;
                      return o.default.createElement(c.Comment, {
                        key: (0, f.getUniqueKey)(t),
                        content: n,
                        createdDate: r,
                        id: t,
                        modifiedDate: a,
                        postId: u,
                        writer: i,
                      });
                    }),
                ),
              ),
            ),
            o.default.createElement(c.StickyKeyboard, { inputRef: A, inputBinder: m, onPress: v }),
          );
        };
      t.default = g;
    },
    948: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(1)),
        o = n(278),
        u = r(n(949)),
        i = r(n(309)),
        l = n(16),
        d = n(310),
        c = n(48),
        f = r(n(953)),
        s = n(55),
        p = n(12),
        g = (0, o.createStackNavigator)(),
        A = function () {
          return a.default.createElement(
            g.Navigator,
            { mode: 'card' },
            a.default.createElement(g.Screen, {
              name: 'Login',
              component: u.default,
              options: {
                headerLeft: function () {
                  return a.default.createElement(
                    c.HeaderWrapper,
                    null,
                    a.default.createElement(l.Image, { imgSrc: i.default }),
                  );
                },
                headerTitle: '',
                headerStyle: d.HomeHeaderStyle,
              },
            }),
            a.default.createElement(g.Screen, {
              name: 'CreateAccount',
              component: f.default,
              options: function (e) {
                var t = e.navigation;
                return {
                  headerLeft: function () {
                    return a.default.createElement(
                      c.HeaderWrapper,
                      null,
                      a.default.createElement(s.BackNaviate, { title: '', navigation: t }),
                    );
                  },
                  headerTitle: '\ud68c\uc6d0\uac00\uc785',
                  headerStyle: d.HomeHeaderStyle,
                  headerTitleStyle: { fontWeight: 'bold', fontSize: 16, color: p.WHITE },
                };
              },
            }),
          );
        };
      t.default = A;
    },
    949: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(950)).default;
      t.default = a;
    },
    950: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(13)),
        u = r(n(1)),
        i = n(50),
        l = a(n(951)),
        d = n(29),
        c = n(88),
        f = n(64),
        s = n(335),
        p = a(n(140)),
        g = n(101);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = function (e) {
        var t = e.navigation,
          n = (0, i.useDispatch)(),
          r = (0, i.useSelector)(function (e) {
            return e;
          }).auth.status,
          a = (0, c.useHandleInput)('').bind,
          o = (0, c.useHandleInput)('').bind;
        return (
          (0, u.useEffect)(
            function () {
              401 === r &&
                (p.default.alert(
                  '\ub85c\uadf8\uc778 \uc2e4\ud328',
                  '\ub85c\uadf8\uc778 \uc815\ubcf4\uac00 \ub9de\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.',
                  [
                    {
                      text: '\ud655\uc778',
                      onPress: function () {
                        return console.log('OK Pressed');
                      },
                    },
                  ],
                  { cancelable: !1 },
                ),
                n((0, g.reset)()));
            },
            [r],
          ),
          u.default.createElement(l.default, {
            handleLogin: function () {
              var e = m(m({}, f.postLogin), {}, { identification: a.text, password: o.text });
              n((0, s.postLoginThunk)(e));
            },
            handleNavigate: function (e) {
              (0, d.stackNavigate)(t, e);
            },
            idBinder: a,
            pwdBinder: o,
          })
        );
      };
      t.default = v;
    },
    951: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(41)),
        l = r(n(63)),
        d = r(n(7)),
        c = n(84),
        f = n(12),
        s = n(16),
        p = n(48),
        g = r(n(34)),
        A = r(n(952));
      function m() {
        var e = (0, a.default)(['']);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, a.default)(['\n  align-items: flex-end;\n']);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, a.default)([
          '\n  flex: 1;\n  margin-left: ',
          ';\n  margin-right: ',
          ';\n  justify-content: space-between;\n',
        ]);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      var E = u.default.View(O(), g.default.width / 18 + 'px', g.default.width / 18 + 'px'),
        h = u.default.View(v()),
        S = u.default.TouchableOpacity(m()),
        b = function (e) {
          var t = e.handleLogin,
            n = e.handleNavigate,
            r = e.idBinder,
            a = e.pwdBinder;
          return o.default.createElement(
            p.BackgroundContainer,
            null,
            o.default.createElement(
              p.KeyboardAvoidingViewer,
              null,
              o.default.createElement(
                l.default,
                { onPress: 'web' !== d.default.OS ? i.default.dismiss : void 0 },
                o.default.createElement(
                  E,
                  null,
                  o.default.createElement(s.Image, {
                    imgSrc: A.default,
                    marginTop: (0, c.ifIphoneX)(g.default.height / 12 + 'px', '0'),
                  }),
                  o.default.createElement(
                    h,
                    null,
                    o.default.createElement(s.BottomLineInput, {
                      inputBinder: r,
                      marginBottom: '30px',
                      placeholder: '\uc544\uc774\ub514',
                      keyboardType: 'email-address',
                    }),
                    o.default.createElement(s.BottomLineInput, {
                      inputBinder: a,
                      marginBottom: '15px',
                      secureTextEntry: !0,
                      placeholder: '\ud328\uc2a4\uc6cc\ub4dc',
                    }),
                    o.default.createElement(
                      S,
                      null,
                      o.default.createElement(s.Text, {
                        text: '\ube44\ubc00\ubc88\ud638 \ucc3e\uae30',
                        marginBottom: '20px',
                      }),
                    ),
                  ),
                  o.default.createElement(
                    s.Colbox,
                    null,
                    o.default.createElement(s.RadiusButton, {
                      text: '\ub85c\uadf8\uc778',
                      height: '49px',
                      color: f.WHITE,
                      bgColor: f.PURPLE,
                      borderRadius: '45px',
                      fontSize: '16px',
                      fontWeight: 800,
                      onPress: t,
                    }),
                    o.default.createElement(s.RadiusButton, {
                      text: '\ud68c\uc6d0\uac00\uc785',
                      height: '49px',
                      color: f.WHITE,
                      borderRadius: '45px',
                      fontSize: '15px',
                      fontWeight: 300,
                      marginBottom: '10px',
                      onPress: function () {
                        n('CreateAccount');
                      },
                    }),
                  ),
                ),
              ),
            ),
          );
        };
      t.default = b;
    },
    952: function (e, t, n) {
      e.exports = n.p + 'static/media/section.508e77bc.png';
    },
    953: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(954)).default;
      t.default = a;
    },
    954: function (e, t, n) {
      var r = n(2),
        a = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var o = a(n(13)),
        u = a(n(14)),
        i = r(n(1)),
        l = n(50),
        d = n(88),
        c = a(n(955)),
        f = n(64),
        s = n(108),
        p = n(29),
        g = n(335);
      function A(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? A(Object(n), !0).forEach(function (t) {
                (0, o.default)(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : A(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              });
        }
        return e;
      }
      var v = function () {
        var e = (0, l.useDispatch)(),
          t = (0, l.useSelector)(function (e) {
            return e;
          }).user.duplicateCheck,
          n = t.isIdUsed,
          r = t.isNicknameUsed,
          a = p.textValidation.onlyLowercaseAndNumberValidator,
          o = p.textValidation.passwordValidator,
          A = p.textValidation.exceptSpecialCaractor,
          v = (0, d.useHandleInput)('').bind,
          O = (0, d.useHandleInput)('').bind,
          E = (0, d.useHandleInput)('').bind,
          h = (0, d.useHandleInput)('').bind,
          S = (0, i.useState)({ available: void 0, errorMsg: '' }),
          b = (0, u.default)(S, 2),
          P = b[0],
          _ = b[1],
          y = (0, i.useState)({ available: void 0, errorMsg: '' }),
          C = (0, u.default)(y, 2),
          T = C[0],
          x = C[1],
          R = (0, i.useState)({ available: void 0, errorMsg: '' }),
          I = (0, u.default)(R, 2),
          L = I[0],
          k = I[1],
          w = (0, i.useState)(!1),
          M = (0, u.default)(w, 2),
          D = M[0],
          j = M[1];
        (0, i.useEffect)(
          function () {
            n &&
              _({ available: !0, errorMsg: '\uc544\uc774\ub514 \uc911\ubcf5\uc774\ub77c\uad6c' }),
              r &&
                k({
                  available: !0,
                  errorMsg: '\ub2c9\ub124\uc784 \uc911\ubcf5\uc785\ub2c8\ub2e4\ub9cc..',
                });
          },
          [n, r],
        ),
          (0, i.useEffect)(
            function () {
              var e = [P.available, T.available, L.available],
                t = (0, p.arrayConditionCheck)(e, function (e) {
                  return void 0 !== e && !e;
                });
              j(t);
            },
            [P, T, L],
          );
        var B = [
          {
            id: 'id',
            placeholder: '\uc544\uc774\ub514',
            bind: v,
            onBlur: function () {
              var t = v.text;
              if (0 !== t.length)
                if (t.length > 2 && a(t)) {
                  var n = m(m({}, f.postIdentificationCheck), {}, { identification: t });
                  e((0, s.postVerifyIdThunk)(n)), _({ available: !1, errorMsg: '' });
                } else
                  _({
                    available: !0,
                    errorMsg:
                      '2\uac1c \uc774\uc0c1 \uc601\uc5b4 \ubc0f \uc22b\uc790\ub85c \ub9cc\ub4e4\ub77c\uad6c~',
                  });
            },
            errorOption: P,
          },
          {
            id: 'password',
            placeholder: '\ube44\ubc00\ubc88\ud638 \uc785\ub825',
            bind: O,
            errorOption: T,
            secureTextEntry: !0,
          },
          {
            id: 'password2',
            placeholder: '\ube44\ubc00\ubc88\ud638 \ud655\uc778',
            bind: E,
            onBlur: function () {
              var e = O.text,
                t = E.text;
              (0 === t.length && 0 === e.length) ||
                (e !== t
                  ? x({
                      available: !0,
                      errorMsg: '\ube44\ubc00\ubc88\ud638\uac00 \ub2e4\ub985\ub2c8\ub2e4',
                    })
                  : o(t)
                  ? x({ available: !1, errorMsg: '' })
                  : x({
                      available: !0,
                      errorMsg:
                        '8\uc790 \uc774\uc0c1 \uc601\ubb38 \uc22b\uc790 \uc870\ud569\uc73c\ub85c \ubd80\ud0c1\ud600~',
                    }));
            },
            errorOption: T,
            secureTextEntry: !0,
          },
          {
            id: 'nickname',
            placeholder: '\ubcc4\uba85 \uc785\ub825',
            bind: h,
            onBlur: function () {
              var t = h.text;
              if (t.length > 1 && A(t)) {
                var n = m(m({}, f.postNicknameCheck), {}, { nickname: t });
                e((0, s.postVerifyNicknameThunk)(n)), k({ available: !1, errorMsg: '' });
              } else
                k({
                  available: !0,
                  errorMsg:
                    '2\uc790 \uc774\uc0c1 \uadf8\ub9ac\uace0 \ud2b9\uc218\ubb38\uc790 \uc81c\uc678 \ud574!',
                });
            },
            errorOption: L,
          },
        ];
        return i.default.createElement(c.default, {
          inputOptions: B,
          handleCreateAccount: function () {
            var t = m(
              m({}, f.postCreateAccount),
              {},
              { identification: v.text, nickname: h.text, password: O.text },
            );
            e((0, g.postCreataeAccountThunk)(t));
          },
          isActivation: D,
        });
      };
      t.default = v;
    },
    955: function (e, t, n) {
      var r = n(0);
      Object.defineProperty(t, '__esModule', { value: !0 }), (t.default = void 0);
      var a = r(n(6)),
        o = r(n(1)),
        u = r(n(8)),
        i = r(n(63)),
        l = r(n(41)),
        d = r(n(7)),
        c = n(48),
        f = r(n(34)),
        s = n(16),
        p = n(12),
        g = n(55),
        A = n(29);
      function m() {
        var e = (0, a.default)([
          '\n  flex: 1;\n  justify-content: flex-end;\n  margin-bottom: 20px;\n',
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      function v() {
        var e = (0, a.default)(['\n  justify-content: space-around;\n']);
        return (
          (v = function () {
            return e;
          }),
          e
        );
      }
      function O() {
        var e = (0, a.default)(['\n  flex: 1;\n  padding-left: ', ';\n  padding-right: ', ';\n']);
        return (
          (O = function () {
            return e;
          }),
          e
        );
      }
      var E = u.default.View(O(), f.default.width / 18 + 'px', f.default.width / 18 + 'px'),
        h = u.default.View(v()),
        S = u.default.View(m()),
        b = function (e) {
          var t = e.inputOptions,
            n = e.handleCreateAccount,
            r = e.isActivation;
          return o.default.createElement(
            c.BackgroundContainer,
            null,
            o.default.createElement(
              i.default,
              { onPress: 'web' !== d.default.OS ? l.default.dismiss : void 0 },
              o.default.createElement(
                E,
                null,
                o.default.createElement(
                  h,
                  null,
                  t.map(function (e, t) {
                    var n = e.errorOption,
                      r = e.onBlur,
                      a = e.placeholder,
                      u = e.bind,
                      i = e.id,
                      l = e.secureTextEntry;
                    return o.default.createElement(g.ValidationInput, {
                      inputBinder: u,
                      placeholder: a,
                      onBlur: 'password' !== i ? r : void 0,
                      isAvailable: null == n ? void 0 : n.available,
                      guideMsg: 'password' !== i ? (null == n ? void 0 : n.errorMsg) : '',
                      secureTextEntry: l,
                      key: (0, A.getUniqueKey)(t),
                    });
                  }),
                ),
                o.default.createElement(
                  S,
                  null,
                  r
                    ? o.default.createElement(s.RadiusButton, {
                        text: '\ud68c\uc6d0\uac00\uc785',
                        height: '49px',
                        color: p.WHITE,
                        bgColor: p.PURPLE,
                        borderRadius: '45px',
                        fontSize: '16px',
                        fontWeight: 800,
                        onPress: n,
                      })
                    : o.default.createElement(s.RadiusButton, {
                        text: '\ud68c\uc6d0\uac00\uc785',
                        height: '49px',
                        color: p.WHITE,
                        bgColor: '#999999',
                        borderRadius: '45px',
                        fontSize: '16px',
                        fontWeight: 800,
                      }),
                ),
              ),
            ),
          );
        };
      t.default = b;
    },
    956: function (e, t, n) {
      e.exports = n.p + 'static/media/splash.06ff41cc.png';
    },
  },
  [[337, 1, 2]],
]);
//# sourceMappingURL=app.aa66221e.chunk.js.map
