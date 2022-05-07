!(function (e, n) {
	'object' == typeof exports && 'undefined' != typeof module
		? n(exports, require('preact'), require('preact/hooks'))
		: 'function' == typeof define && define.amd
		? define(['exports', 'preact', 'preact/hooks'], n)
		: n(((e || self).preactCompat = {}), e.preact, e.preactHooks);
})(this, function (e, n, t) {
	var r = /^(-|f[lo].*[^se]$|g.{5,}[^ps]$|z|o[pr]|(W.{5})?[lL]i.*(t|mp)$|an|(bo|s).{4}Im|sca|m.{6}[ds]|ta|c.*[st]$|wido|ini)/;
	function o(e, n) {
		for (var t in e) if ('__source' !== t && !(t in n)) return !0;
		for (var r in n) if ('__source' !== r && e[r] !== n[r]) return !0;
		return !1;
	}
	function u(e) {
		this.props = e;
	}
	function i(e, t) {
		function r() {}
		return (
			(r.prototype = new n.Component()),
			(r.displayName = 'Memo(' + (e.displayName || e.name) + ')'),
			(r.prototype.render = function (t) {
				return n.createElement(e, t);
			}),
			(r.prototype.shouldComponentUpdate = function (e) {
				var n = this.props.ref,
					r = n == e.ref;
				return (
					!r && n && (n.call ? n(null) : (n.current = null)),
					t ? !t(this.props, e) || !r : o(this.props, e)
				);
			}),
			(r.prototype.isReactComponent = !0),
			(r.__f = !0),
			r
		);
	}
	((u.prototype = new n.Component()).isPureReactComponent = !0),
		(u.prototype.shouldComponentUpdate = function (e, n) {
			return o(this.props, e) || o(this.state, n);
		});
	var l = n.options.__b;
	n.options.__b = (e, n) => {
		e.type &&
			e.type.__f &&
			n.ref &&
			((n.props.ref = n.ref), (n.ref = null), (e.ref = null)),
			l && l(e, n);
	};
	var f =
		('undefined' != typeof Symbol &&
			Symbol.for &&
			Symbol.for('react.forward_ref')) ||
		3911;
	function a(e) {
		function n(n, t) {
			var r = Object.assign({}, n);
			return (
				delete r.ref,
				e(
					r,
					!(t = n.ref || t) || ('object' == typeof t && !('current' in t))
						? null
						: t
				)
			);
		}
		return (
			(n.$$typeof = f),
			(n.render = n),
			(n.prototype.isReactComponent = n.__f = !0),
			(n.displayName = 'ForwardRef(' + (e.displayName || e.name) + ')'),
			n
		);
	}
	var c = (e, t) =>
			null == e ? null : n.toChildArray(n.toChildArray(e).map(t)),
		s = {
			map: c,
			forEach: c,
			count: (e) => (e ? n.toChildArray(e).length : 0),
			only(e) {
				var t = n.toChildArray(e);
				if (1 !== t.length) throw 'Children.only';
				return t[0];
			},
			toArray: n.toChildArray
		};
	Promise.prototype.then.bind(Promise.resolve());
	var h = (e) => 28 & e.flags && (!(16 & e.flags) || e.props.__P == d(e.__));
	function p(e, n) {
		if (null == e.__k) return null;
		for (n = n || 0; n < e.__k.length; n++) {
			var t = e.__k[n];
			if (null != t) {
				if (3 & t.flags) return t.__e;
				if (h(t)) {
					var r = p(t);
					if (r) return r;
				}
			}
		}
		return null;
	}
	function d(e) {
		for (var n = 16 & e.flags ? e.props.__P : null, t = e.__; null == n && t; )
			16 & t.flags ? (n = t.props.__P) : 2 & t.flags && (n = t.__e), (t = t.__);
		return n;
	}
	var m = n.options.__e;
	n.options.__e = function (e, n) {
		if (e.then)
			for (var t, r = n; (r = r.__); )
				if ((t = r.__c) && t.__c) return t.__c(e, n);
		m(e, n);
	};
	var v = n.options.unmount;
	function b() {
		(this.__u = 0), (this.t = null), (this.__P = null), (this.o = 0);
	}
	function y(e) {
		var n = e.__.__c;
		return n && n.__e && n.__e(e);
	}
	function g(e) {
		var t, r, o;
		function u(u) {
			if (
				(t ||
					(t = e()).then(
						(e) => {
							r = e.default || e;
						},
						(e) => {
							o = e;
						}
					),
				o)
			)
				throw o;
			if (!r) throw t;
			return n.createElement(r, u);
		}
		return (u.displayName = 'Lazy'), (u.__f = !0), u;
	}
	function _() {
		(this.u = null), (this.i = null);
	}
	(n.options.unmount = function (e) {
		var n = e.__c;
		n && n.__R && n.__R(),
			n && 32 == (32 & e.flags) && (e.flags |= 2),
			v && v(e);
	}),
		((b.prototype = new n.Component()).__c = function (e, n) {
			var t = n.__c;
			if (null == t.__R) {
				var r = this;
				null == r.t && (r.t = []), r.t.push(t);
				var o = y(r.__i),
					u = !1,
					i = () => {
						u || ((u = !0), (t.__R = null), o ? o(l) : l());
					};
				t.__R = i;
				var l = () => {
						var e;
						if (!--r.__u)
							for (this.__P = null, r.setState({ __e: !1 }); (e = r.t.pop()); )
								e.forceUpdate();
					},
					f = 32 == (32 & n.flags);
				r.__u++ ||
					f ||
					((this.__P = document.createElement('div')), r.setState({ __e: !0 })),
					e.then(i, i);
			}
		}),
		(b.prototype.componentWillUnmount = function () {
			(this.t = []), (this.__P = null);
		}),
		(b.prototype.render = function (e, t) {
			null == this.__P && (this.__P = d(this.__i));
			var r = t.__e && n.createElement(n.Fragment, null, e.fallback),
				o = n.createPortal(e.children, this.__P);
			return t.__e ? (o.__v = this.o) : (this.o = o.__v), [o, r];
		});
	var O = (e, n, t) => {
		if (
			(++t[1] === t[0] && e.i.delete(n.props),
			e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.i.size))
		)
			for (t = e.u; t; ) {
				for (; t.length > 3; ) t.pop()();
				if (t[1] < t[0]) break;
				e.u = t = t[2];
			}
	};
	((_.prototype = new n.Component()).__e = function (e) {
		var n = this,
			t = y(n.__i),
			r = n.i.get(e.props);
		return (
			r[0]++,
			(o) => {
				var u = () => {
					n.props.revealOrder ? (r.push(o), O(n, e, r)) : o();
				};
				t ? t(u) : u();
			}
		);
	}),
		(_.prototype.render = function (e) {
			(this.u = null), (this.i = new Map());
			var t = n.toChildArray(e.children);
			e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
			for (var r = t.length; r--; )
				this.i.set(t[r].props, (this.u = [1, 0, this.u]));
			return e.children;
		}),
		(_.prototype.componentDidUpdate = _.prototype.componentDidMount = function () {
			this.i.forEach((e, n) => {
				O(this, { props: n }, e);
			});
		});
	var j =
			('undefined' != typeof Symbol &&
				Symbol.for &&
				Symbol.for('react.element')) ||
			60103,
		S = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
		w = 'undefined' != typeof document,
		R = (e) =>
			('undefined' != typeof Symbol && 'symbol' == typeof Symbol()
				? /fil|che|rad/i
				: /fil|che|ra/i
			).test(e);
	function C(e, t, r) {
		null == t.__k && (t.textContent = ''),
			n.render(e, t),
			'function' == typeof r && r();
		var o = t.__k.__k[0];
		return o ? o.__c : null;
	}
	function E(e, t, r) {
		return n.hydrate(e, t), 'function' == typeof r && r(), e ? e.__c : null;
	}
	(n.Component.prototype.isReactComponent = {}),
		[
			'componentWillMount',
			'componentWillReceiveProps',
			'componentWillUpdate'
		].forEach((e) => {
			Object.defineProperty(n.Component.prototype, e, {
				configurable: !0,
				get() {
					return this['UNSAFE_' + e];
				},
				set(n) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						value: n
					});
				}
			});
		});
	var x = n.options.event;
	function k() {}
	function A() {
		return this.cancelBubble;
	}
	function L() {
		return this.defaultPrevented;
	}
	n.options.event = (e) => (
		x && (e = x(e)),
		(e.persist = k),
		(e.isPropagationStopped = A),
		(e.isDefaultPrevented = L),
		(e.nativeEvent = e)
	);
	var N,
		P = {
			configurable: !0,
			get() {
				return this.class;
			}
		},
		T = n.options.vnode;
	n.options.vnode = (e) => {
		var t,
			o = e.type,
			u = e.props,
			i = u;
		if ('string' == typeof o) {
			var l = -1 === o.indexOf('-');
			i = {};
			var f = u.style;
			if ('object' == typeof f)
				for (t in f) 'number' != typeof f[t] || r.test(t) || (f[t] += 'px');
			for (t in u) {
				var a = u[t];
				(w && 'children' === t && 'noscript' === o) ||
					('value' === t && 'defaultValue' in u && null == a) ||
					('defaultValue' === t && 'value' in u && null == u.value
						? (t = 'value')
						: 'download' === t && !0 === a
						? (a = '')
						: /ondoubleclick/i.test(t)
						? (t = 'ondblclick')
						: /^onchange(textarea|input)/i.test(t + o) && !R(u.type)
						? (t = 'oninput')
						: /^onfocus$/i.test(t)
						? (t = 'onfocusin')
						: /^onblur$/i.test(t)
						? (t = 'onfocusout')
						: /^on(Ani|Tra|Tou|BeforeInp)/.test(t)
						? (t = t.toLowerCase())
						: l && S.test(t)
						? (t = t.replace(/[A-Z0-9]/, '-$&').toLowerCase())
						: null === a && (a = void 0),
					(i[t] = a));
			}
			'select' == o &&
				i.multiple &&
				Array.isArray(i.value) &&
				(i.value = n.toChildArray(u.children).forEach((e) => {
					e.props.selected = -1 != i.value.indexOf(e.props.value);
				})),
				'select' == o &&
					null != i.defaultValue &&
					(i.value = n.toChildArray(u.children).forEach((e) => {
						e.props.selected = i.multiple
							? -1 != i.defaultValue.indexOf(e.props.value)
							: i.defaultValue == e.props.value;
					})),
				(e.props = i),
				o &&
					u.class != u.className &&
					((P.enumerable = 'className' in u),
					null != u.className && (i.class = u.className),
					Object.defineProperty(i, 'className', P));
		} else if ('function' == typeof o && o.defaultProps)
			for (t in o.defaultProps) void 0 === i[t] && (i[t] = o.defaultProps[t]);
		(e.$$typeof = j), T && T(e);
	};
	var U = n.options.__r;
	n.options.__r = function (e) {
		U && U(e),
			(N = (function (e) {
				for (var n = e.c, t = e.__; null == n && t; ) (n = t.c), (t = t.__);
				return n;
			})(e));
	};
	var $ = {
			ReactCurrentDispatcher: {
				current: { readContext: (e) => N[e.__c].props.value }
			}
		},
		D =
			'object' == typeof performance && 'function' == typeof performance.now
				? performance.now.bind(performance)
				: () => Date.now(),
		F = '17.0.2';
	function I(e) {
		return n.createElement.bind(null, e);
	}
	function M(e) {
		return !!e && e.$$typeof === j;
	}
	function W(e) {
		return M(e) ? n.cloneElement.apply(null, arguments) : e;
	}
	function z(e) {
		return !!e.__k && (n.render(null, e), !0);
	}
	function V(e) {
		return null == e ? null : 1 == e.nodeType ? e : p(e.__i);
	}
	var q = (e, n) => e(n),
		B = n.Fragment,
		H = (e, n) => e(n),
		Z = {
			useState: t.useState,
			useReducer: t.useReducer,
			flushSync: H,
			useEffect: t.useEffect,
			useLayoutEffect: t.useLayoutEffect,
			useRef: t.useRef,
			useImperativeHandle: t.useImperativeHandle,
			useMemo: t.useMemo,
			useCallback: t.useCallback,
			useContext: t.useContext,
			useDebugValue: t.useDebugValue,
			version: F,
			Children: s,
			render: C,
			hydrate: E,
			unmountComponentAtNode: z,
			createPortal: n.createPortal,
			createElement: n.createElement,
			createContext: n.createContext,
			createFactory: I,
			cloneElement: W,
			createRef: n.createRef,
			Fragment: n.Fragment,
			isValidElement: M,
			findDOMNode: V,
			Component: n.Component,
			PureComponent: u,
			memo: i,
			forwardRef: a,
			unstable_batchedUpdates: q,
			StrictMode: B,
			Suspense: b,
			SuspenseList: _,
			lazy: g,
			__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: $,
			createRoot: n.createRoot
		};
	Object.defineProperty(e, 'Component', {
		enumerable: !0,
		get: function () {
			return n.Component;
		}
	}),
		Object.defineProperty(e, 'Fragment', {
			enumerable: !0,
			get: function () {
				return n.Fragment;
			}
		}),
		Object.defineProperty(e, 'createContext', {
			enumerable: !0,
			get: function () {
				return n.createContext;
			}
		}),
		Object.defineProperty(e, 'createElement', {
			enumerable: !0,
			get: function () {
				return n.createElement;
			}
		}),
		Object.defineProperty(e, 'createPortal', {
			enumerable: !0,
			get: function () {
				return n.createPortal;
			}
		}),
		Object.defineProperty(e, 'createRef', {
			enumerable: !0,
			get: function () {
				return n.createRef;
			}
		}),
		Object.defineProperty(e, 'createRoot', {
			enumerable: !0,
			get: function () {
				return n.createRoot;
			}
		}),
		(e.Children = s),
		(e.PureComponent = u),
		(e.StrictMode = B),
		(e.Suspense = b),
		(e.SuspenseList = _),
		(e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = $),
		(e.cloneElement = W),
		(e.createFactory = I),
		(e.default = Z),
		(e.findDOMNode = V),
		(e.flushSync = H),
		(e.forwardRef = a),
		(e.hydrate = E),
		(e.isValidElement = M),
		(e.lazy = g),
		(e.memo = i),
		(e.render = C),
		(e.unmountComponentAtNode = z),
		(e.unstable_IdlePriority = 5),
		(e.unstable_ImmediatePriority = 1),
		(e.unstable_LowPriority = 4),
		(e.unstable_NormalPriority = 3),
		(e.unstable_UserBlockingPriority = 2),
		(e.unstable_batchedUpdates = q),
		(e.unstable_now = D),
		(e.unstable_runWithPriority = function (e, n) {
			return n();
		}),
		(e.version = F),
		Object.keys(t).forEach(function (n) {
			'default' === n ||
				e.hasOwnProperty(n) ||
				Object.defineProperty(e, n, {
					enumerable: !0,
					get: function () {
						return t[n];
					}
				});
		});
});
//# sourceMappingURL=compat.umd.js.map
