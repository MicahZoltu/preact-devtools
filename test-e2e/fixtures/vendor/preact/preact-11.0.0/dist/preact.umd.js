!(function (n, l) {
	'object' == typeof exports && 'undefined' != typeof module
		? l(exports)
		: 'function' == typeof define && define.amd
		? define(['exports'], l)
		: l(((n || self).preact = {}));
})(this, function (n) {
	var l,
		t,
		u,
		r,
		e,
		i,
		f,
		o,
		c,
		s,
		a,
		h,
		y = 16,
		v = 28,
		d = 4096,
		p = 16384,
		_ = 32768,
		b = -42465,
		g = [],
		k = void 0;
	function j(n, l) {
		null == n.__h && (n.__h = []), n.__h.push(l);
	}
	function m(n, t) {
		l.__c && l.__c(t, n),
			n.some((t) => {
				try {
					for (n = t.__h.length; n--; ) t.__h.shift()();
				} catch (n) {
					l.__e(n, t);
				}
			});
	}
	function w(n, l, t) {
		var u,
			r,
			e,
			i = {};
		for (e in l)
			'key' == e ? (u = l[e]) : 'ref' == e ? (r = l[e]) : (i[e] = l[e]);
		if (arguments.length > 3)
			for (t = [t], e = 3; arguments.length > e; e++) t.push(arguments[e]);
		return arguments.length > 2 && (i.children = t), x(n, i, u, r, 0);
	}
	function x(n, u, r, e, i) {
		var f = {
			type: n,
			props: u,
			key: r,
			ref: e,
			constructor: void 0,
			__v: i || ++t
		};
		return null != l.vnode && l.vnode(f), f;
	}
	function O(n) {
		return null == n || 'boolean' == typeof n
			? null
			: 'object' == typeof n
			? Array.isArray(n)
				? x(T, { children: n }, null, null, 0)
				: n
			: 'function' == typeof n
			? n
			: n + '';
	}
	function T(n) {
		return n.children;
	}
	function A(n, t, u, r) {
		if (n !== t) {
			n && A(null, n, null, r);
			try {
				'function' == typeof t ? t(u) : t && (t.current = u);
			} catch (n) {
				l.__e(n, r);
			}
		}
	}
	function S(n, l, t) {
		'-' === l[0]
			? n.style.setProperty(l, t)
			: (n.style[l] = null == t ? '' : t);
	}
	function H(n, l, t, u, r) {
		var e;
		n: if ('style' === l)
			if ('string' == typeof t) S(n, 'cssText', t);
			else {
				if (('string' == typeof u && S(n, 'cssText', (u = '')), u))
					for (l in u) (t && l in t) || S(n, l, '');
				for (l in t) (u && t[l] === u[l]) || S(n, l, t[l]);
			}
		else if ('o' === l[0] && 'n' === l[1])
			(e = l !== (l = l.replace(/Capture$/, ''))),
				(l = l.toLowerCase() in n ? l.toLowerCase().slice(2) : l.slice(2)),
				n.l || (n.l = {}),
				(n.l[l + e] = t),
				t
					? u || n.addEventListener(l, e ? P : I, e)
					: n.removeEventListener(l, e ? P : I, e);
		else if ('dangerouslySetInnerHTML' !== l) {
			if (r) l = l.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's');
			else if (
				'href' !== l &&
				'list' !== l &&
				'form' !== l &&
				'tabIndex' !== l &&
				'download' !== l &&
				l in n
			)
				try {
					n[l] = null == t ? '' : t;
					break n;
				} catch (n) {}
			'function' == typeof t ||
				(null != t && (!1 !== t || ('a' === l[0] && 'r' === l[1]))
					? n.setAttribute(l, t)
					: n.removeAttribute(l));
		}
	}
	function I(n) {
		this.l[n.type + !1](l.event ? l.event(n) : n),
			this.t &&
				(null == this.value ||
					('input' !== n.type && 'change' !== n.type) ||
					(this.value = this.u),
				null != this.checked && 'change' === n.type && (this.checked = this.u));
	}
	function P(n) {
		this.l[n.type + !0](l.event ? l.event(n) : n);
	}
	function L(n, t, u, r) {
		var e,
			i,
			f = t.type,
			o = n ? n.props : t.props;
		return (
			t && t.__c
				? (e = t.__c)
				: ((t.__c = e = {
						props: o,
						context: r,
						forceUpdate: t.rerender.bind(null, t)
				  }),
				  (t.flags |= p)),
			n && n.__v === t.__v
				? ((e.props = o), void (t.flags |= _))
				: ((e.context = r),
				  (t.props = e.props = o),
				  (i = l.__r) && i(t),
				  (t.flags &= -16385),
				  (e.__i = t),
				  (i = f.call(e, e.props, e.context)),
				  null != e.getChildContext &&
						(t.c = Object.assign({}, u, e.getChildContext())),
				  i)
		);
	}
	function M(n, t, u, r) {
		var e,
			i,
			f,
			o,
			c,
			s,
			a = t.type,
			h = n ? n.props : t.props;
		if (
			(t && t.__c
				? (e = t.__c)
				: ((t.__c = e = new a(h, r)),
				  e.state || (e.state = {}),
				  (i = !0),
				  (t.flags |= p)),
			null == e.__s && (e.__s = e.state),
			null != a.getDerivedStateFromProps &&
				(e.__s == e.state && (e.__s = Object.assign({}, e.__s)),
				Object.assign(e.__s, a.getDerivedStateFromProps(h, e.__s))),
			(f = e.props),
			(o = e.state),
			i)
		)
			null == a.getDerivedStateFromProps &&
				null != e.componentWillMount &&
				e.componentWillMount(),
				null != e.componentDidMount && j(t, e.componentDidMount.bind(e));
		else {
			if (
				(null == a.getDerivedStateFromProps &&
					h !== f &&
					null != e.componentWillReceiveProps &&
					e.componentWillReceiveProps(h, r),
				(!(8192 & t.flags) &&
					null != e.shouldComponentUpdate &&
					!1 === e.shouldComponentUpdate(h, e.__s, r)) ||
					(n && n.__v === t.__v))
			)
				return (e.props = h), (e.state = e.__s), void (t.flags |= _);
			null != e.componentWillUpdate && e.componentWillUpdate(h, e.__s, r);
		}
		return (
			(e.context = r),
			(t.props = e.props = h),
			(e.state = e.__s),
			(s = l.__r) && s(t),
			(t.flags &= -16385),
			(e.__i = t),
			(s = e.render(e.props, e.state, e.context)),
			(e.state = e.__s),
			null != e.getChildContext &&
				(t.c = Object.assign({}, u, e.getChildContext())),
			i ||
				(null != e.getSnapshotBeforeUpdate &&
					(c = e.getSnapshotBeforeUpdate(f, o)),
				null != e.componentDidUpdate &&
					j(t, () => {
						e.componentDidUpdate(f, o, c);
					})),
			s
		);
	}
	function C(n, t, u) {
		var r,
			e = 0;
		if (
			(l.unmount && l.unmount(n),
			(n.flags |= 2048),
			(r = n.ref) &&
				((r.current && r.current !== n.__e) || A(null, r, null, t)),
			(r = n.__c) && (i(n), r.componentWillUnmount))
		)
			try {
				r.componentWillUnmount();
			} catch (n) {
				l.__e(n, t);
			}
		if ((r = n.__k))
			for (; r.length > e; e++)
				r[e] && C(r[e], t, u ? ~n.flags & y : 3 & n.flags);
		!u && 3 & n.flags && n.__e.remove(), (n.__e = null);
	}
	function N(n, l, t, u) {
		var r,
			e,
			i,
			f,
			o,
			c,
			s,
			a,
			h,
			y,
			d,
			p = (t.__k && t.__k.slice()) || g,
			_ = p.length,
			b = _,
			j = 0,
			m = [];
		for (r = 0; l.length > r; r++)
			if (null != (o = O(l[r]))) {
				(c = void 0),
					-1 === (a = $(o, p, (s = r + j), b))
						? (f = k)
						: ((f = p[a]), (p[a] = k), b--),
					(h = null == f)
						? R(n, o, (f = F(o, t)), u, G(t, s))
						: 160 == (160 & f.flags)
						? ((c = f.ref), R(n, o, f, u, f.__e))
						: ((c = f.ref), q(n, o, f, u)),
					(e = f.__e),
					(o.ref || c) &&
						(i || (i = []),
						(f.ref = o.ref),
						i.push(c, o.ref, (f.flags & v && f.__c) || e, f));
				n: if (h)
					-1 == a && j--,
						3 & f.flags && ((y = G(t, s)), n.insertBefore(f.__e, y));
				else if (a !== s) {
					if (a === s + 1) {
						j++;
						break n;
					}
					if (a > s) {
						if (b > l.length - s) {
							j += a - s;
							break n;
						}
						j--;
					} else j = s > a && a == s - 1 ? a - s : 0;
					if (((s = r + j), a == r)) break n;
					(d = G(t, s + 1)),
						3 & f.flags ? n.insertBefore(f.__e, d) : U(f, d, n);
				}
				m[r] = f;
			} else m[r] = null;
		if (((t.__k = m), b > 0)) for (r = _; r--; ) null != p[r] && C(p[r], p[r]);
		if (i) for (r = 0; i.length > r; r++) A(i[r], i[++r], i[++r], i[++r]);
	}
	function $(n, l, t, u) {
		var r = 'string' == typeof n ? null : n.type,
			e = null !== r ? n.key : k,
			i = -1,
			f = t - 1,
			o = t + 1,
			c = l[t];
		if (null === c || (null != c && c.type === r && c.key == e)) i = t;
		else if (u > (null != c ? 1 : 0))
			for (;;) {
				if (f >= 0) {
					if (null != (c = l[f]) && c.type === r && c.key == e) {
						i = f;
						break;
					}
					f--;
				}
				if (l.length > o) {
					if (null != (c = l[o]) && c.type === r && c.key == e) {
						i = o;
						break;
					}
					o++;
				} else if (0 > f) break;
			}
		return i;
	}
	function U(n, l, t) {
		var u, r;
		if (null != n.__k)
			for (u = 0; n.__k.length > u; u++)
				(r = n.__k[u]) &&
					((r.__ = n),
					r.flags & v ? U(r, l, t) : r.__e != l && t.insertBefore(r.__e, l));
	}
	function q(n, t, u, r) {
		var e,
			i,
			f,
			o,
			c,
			s,
			a,
			h,
			v = u.__e,
			d = u.flags;
		if (1 & d) t !== u.props && ((v.data = t), (u.props = t));
		else {
			if (t.constructor !== k) return null;
			l.__b && l.__b(u, t),
				2 & d &&
					(t.__v !== u.__v && (z(v, t, u, r), (u.__v = t.__v)),
					l.diffed && l.diffed(u),
					(u.flags &= b)),
				(i = n),
				d & y &&
					((n = t.props.__P),
					u.props.__P !== t.props.__P && U(u, n == i ? G(u) : null, n));
			try {
				512 & u.flags && (u.flags ^= 1536),
					(f = K(u)),
					(c = (o = t.type.contextType) && f[o.__c]),
					(s = o ? (c ? c.props.value : o.__) : f),
					(a = !u || !u.__c),
					(e = 4 & u.flags ? M(t, u, f, s) : L(t, u, f, s)),
					u.flags & _
						? ((u.props = t.props),
						  (u.flags &= -32769),
						  t && t.__v !== u.__v && (u.flags &= -16385))
						: ((h =
								null != e && e.type === T && null == e.key
									? e.props.children
									: e),
						  null == u.__k
								? W(
										n,
										Array.isArray(h) ? h : [h],
										u,
										r,
										160 == (160 & u.flags)
											? u.__e
											: a || 32 & u.flags
											? null
											: G(u)
								  )
								: N(n, Array.isArray(h) ? h : [h], u, r)),
					null != u.__h && u.__h.length && r.push(u);
			} catch (n) {
				(u.flags |= n.then ? 128 : 256), l.__e(n, u);
			}
			l.diffed && l.diffed(u), (u.flags &= b), (u.__v = t.__v);
		}
	}
	function z(n, l, t, u) {
		var r,
			e,
			i,
			f,
			o,
			c,
			s = t.props,
			a = (t.props = l.props),
			h = t.flags & d;
		for (r in s)
			(e = s[r]),
				'key' === r ||
					'children' === r ||
					('dangerouslySetInnerHTML' === r
						? (o = e)
						: r in a || H(n, r, null, e, h));
		for (r in a)
			(e = a[r]),
				'key' === r ||
					('children' === r
						? (c = e)
						: 'dangerouslySetInnerHTML' === r
						? (f = e)
						: (e === (i = s[r]) &&
								(('checked' !== r && 'value' !== r) ||
									null == e ||
									e === n[r])) ||
						  H(n, r, e, i, h));
		f
			? ((e = f.__html),
			  (!o || (e !== o.__html && e !== n.innerHTML)) && (n.innerHTML = e),
			  (t.__k = null))
			: (o && (n.innerHTML = ''), N(n, c && Array.isArray(c) ? c : [c], t, u)),
			null != a.value && n.t
				? (n.u = a.value)
				: null != a.checked && n.t && (n.u = a.checked);
	}
	function B(n, l) {
		(this.props = n), (this.context = l);
	}
	function D(n) {
		((n.flags & p || !(n.flags |= p) || !o.push(n) || E.__r++) &&
			c === l.debounceRendering) ||
			((c = l.debounceRendering) || s)(E);
	}
	function E() {
		for (; (a = E.__r = o.length); )
			for (o.sort((n, l) => n.__b - l.__b); a--; )
				(l = void 0),
					2048 & ~(n = o.shift()).flags &&
						n.flags & p &&
						(q(Q(n), x(n.type, n.props, n.key, n.ref, 0), n, (l = [])),
						m(l, n));
		var n, l;
	}
	function F(n, t) {
		var u,
			r,
			e,
			i,
			f = null,
			o = t ? 4192 & t.flags : 0,
			c = NaN;
		return (
			'string' == typeof n
				? ((o |= 1), (u = n))
				: n.constructor !== k
				? ((o |= 1), (u = ''))
				: ((u = n.props || {}),
				  (r = n.key),
				  (e = n.ref),
				  (c = n.__v),
				  2 &
						(o |=
							'function' == typeof (f = n.type)
								? f.prototype && 'render' in f.prototype
									? 4
									: u.__P
									? y
									: 8
								: 2) && 'svg' === f
						? (o |= d)
						: t && t.flags & d && 'foreignObject' === t.type && (o &= -4097)),
			(i = {
				type: f,
				props: u,
				key: r,
				ref: e,
				data: 'function' == typeof f ? {} : null,
				rerender: D,
				flags: o,
				__k: null,
				__: t,
				__v: c,
				__e: null,
				__c: null,
				c: null,
				__b: t ? t.__b + 1 : 0
			}),
			l.__i && l.__i(i, n),
			i
		);
	}
	function G(n, l) {
		return null == l
			? G(n.__, n.__.__k.indexOf(n) + 1)
			: J(n, l) || (n.__ && h(n) ? G(n) : null);
	}
	function J(n, l) {
		var t, u;
		if (null == n.__k) return null;
		for (l = l || 0; n.__k.length > l; l++)
			if (null != (t = n.__k[l])) {
				if (3 & t.flags) return t.__e;
				if (h(t) && (u = J(t))) return u;
			}
		return null;
	}
	function K(n) {
		for (var l = n.c, t = n.__; null == l && t; ) (l = t.c), (t = t.__);
		return l;
	}
	function Q(n) {
		for (var l = n.flags & y ? n.props.__P : null, t = n.__; null == l && t; )
			t.flags & y ? (l = t.props.__P) : 2 & t.flags && (l = t.__e), (t = t.__);
		return l;
	}
	function R(n, t, u, r, e) {
		var i, f, o, c, s, a, h, d;
		l.__b && l.__b(u, t);
		try {
			u.flags & v
				? ((f = e),
				  (o = n),
				  u.flags & y && (n = t.props.__P) !== o && (e = null),
				  (c = K(u)),
				  (a = (s = t.type.contextType) && c[s.__c]),
				  (h = s ? (a ? a.props.value : s.__) : c),
				  a && a.s.add(u),
				  (i = 4 & u.flags ? M(null, u, c, h) : L(null, u, c, h)),
				  (i = W(
						n,
						Array.isArray(
							(d =
								null != i && i.type === T && null == i.key
									? i.props.children
									: i)
						)
							? d
							: [d],
						u,
						r,
						e
				  )),
				  null != u.__h && u.__h.length && r.push(u),
				  u.flags & y && o !== n && (i = f))
				: (i = V(96 & u.flags ? e : null, u, r)),
				l.diffed && l.diffed(u),
				(u.flags &= b);
		} catch (n) {
			(u.__v = 0),
				(u.flags |= n.then ? 128 : 256),
				32 & u.flags && ((i = e && e.nextSibling), (u.__e = e)),
				l.__e(n, u);
		}
		return i;
	}
	function V(n, l, t) {
		var u,
			r,
			e,
			i,
			f,
			o,
			c = l.props,
			s = l.type,
			a = l.flags,
			h = a & d,
			y = 32 & ~a;
		if (96 & a)
			for (; n && (s ? n.localName !== s : 3 !== n.nodeType); )
				n = n.nextSibling;
		if (((e = null == n), 1 & a))
			e ? (n = document.createTextNode(c)) : n.data !== c && (n.data = c),
				(l.__e = n);
		else {
			if (
				(e &&
					((n = h
						? document.createElementNS('http://www.w3.org/2000/svg', s)
						: document.createElement(s, c.is && c)),
					(l.flags = a &= b),
					(y = 1)),
				64 & a)
			)
				for (u = 0; n.attributes.length > u; u++)
					(r = n.attributes[u].name) in c || n.removeAttribute(r);
			for (u in (('input' !== l.type &&
				'textarea' !== l.type &&
				'select' !== l.type) ||
				(!c.onInput && !c.onChange) ||
				(null != c.value
					? ((n.t = !0), (n.u = c.value))
					: null != c.checked && ((n.t = !0), (n.u = c.checked))),
			c))
				(r = c[u]),
					'key' === u ||
						('children' === u
							? (o = r)
							: 'dangerouslySetInnerHTML' === u
							? (i = r)
							: 'value' === u
							? (f = r)
							: null == r ||
							  (!y && 'function' != typeof r) ||
							  H(n, u, r, null, h));
			(l.__e = n),
				i
					? (y && i.__html && (n.innerHTML = i.__html), (l.__k = null))
					: null != o &&
					  W(
							n,
							o && Array.isArray(o) ? o : [o],
							l,
							t,
							e ? null : n.firstChild
					  ),
				y && null != f && H(n, 'value', f, null, 0);
		}
		return e ? null : n.nextSibling;
	}
	function W(n, l, t, u, r) {
		var e,
			i,
			f,
			o,
			c,
			s = (t.__k = []);
		for (e = 0; l.length > e; e++)
			null != (i = O(l[e]))
				? ((f = F(i, t)),
				  (s[e] = f),
				  (c = R(n, i, f, u, r)),
				  (o = f.__e),
				  f.flags & v || o == r ? (r = c) : null != o && n.insertBefore(o, r),
				  f.ref && A(null, f.ref, f.__c || o, f))
				: (s[e] = null);
		if (96 & t.flags && 2 & t.flags)
			for (; r; ) (e = r), (r = r.nextSibling), e.remove();
		return r;
	}
	function X(n) {
		var t,
			u,
			r,
			e = 0;
		function i(i) {
			l.__ && l.__(i, n),
				(i = w(T, { __P: n }, [i])),
				(r = n.firstChild),
				(u = []),
				t
					? q(n, i, t, u)
					: ((t = F(i)),
					  (n.__k = t),
					  r && (e = e || 64),
					  n.ownerSVGElement !== k && (e |= d),
					  (t.flags |= e),
					  (t.c = {}),
					  R(n, i, t, u, r)),
				m(u, t);
		}
		return {
			hydrate(n) {
				(e |= 32), i(n);
			},
			render: i
		};
	}
	function Y(n) {
		return n.children;
	}
	(l = {
		__e: function (n, l) {
			for (; (l = l.__); )
				if (l.flags & v && 1024 & ~l.flags)
					try {
						if (
							(l.type.getDerivedStateFromError &&
								l.__c.setState(l.type.getDerivedStateFromError(n)),
							l.__c.componentDidCatch && l.__c.componentDidCatch(n),
							l.flags & p)
						)
							return void (l.flags |= 512);
					} catch (l) {
						n = l;
					}
			throw n;
		}
	}),
		(t = 0),
		(u = (n) => null != n && n.constructor === k),
		(r = 0),
		(e = new Set()),
		(i = (n) => {
			e.delete(n) ||
				e.forEach((l) => {
					l.__c.s.delete(n);
				});
		}),
		(f = (n, l) => {
			var t = {
				__c: (l = '__cC' + r++),
				__: n,
				Consumer: (n, l) => n.children(l),
				Provider(n, t) {
					return (
						this.s
							? n.value !== this.p && this.s.forEach(D)
							: ((this.s = new Set()),
							  ((t = {})[l] = this),
							  (this.getChildContext = () => t),
							  e.add(this.__i)),
						(this.p = n.value),
						n.children
					);
				}
			};
			return (t.Provider.__ = t.Consumer.contextType = t);
		}),
		(B.prototype.setState = function (n, l) {
			var t;
			(t =
				null != this.__s && this.__s !== this.state
					? this.__s
					: (this.__s = Object.assign({}, this.state))),
				'function' == typeof n && (n = n(Object.assign({}, t), this.props)),
				n && Object.assign(t, n),
				null != n &&
					this.__i &&
					(l && j(this.__i, l.bind(this)), this.__i.rerender(this.__i));
		}),
		(B.prototype.forceUpdate = function (n) {
			this.__i &&
				((this.__i.flags |= 8192),
				n && j(this.__i, n.bind(this)),
				this.__i.rerender(this.__i));
		}),
		(B.prototype.render = T),
		(o = []),
		(s = Promise.prototype.then.bind(Promise.resolve())),
		(a = E.__r = 0),
		(h = (n) => n.flags & v && (!(n.flags & y) || n.props.__P == Q(n.__))),
		(n.Component = B),
		(n.Fragment = T),
		(n.cloneElement = function (n, l, t) {
			var u,
				r,
				e,
				i = Object.assign({}, n.props);
			for (e in l)
				'key' == e ? (u = l[e]) : 'ref' == e ? (r = l[e]) : (i[e] = l[e]);
			if (arguments.length > 3)
				for (t = [t], e = 3; arguments.length > e; e++) t.push(arguments[e]);
			return (
				arguments.length > 2 && (i.children = t),
				x(n.type, i, u || n.key, r || n.ref, 0)
			);
		}),
		(n.createContext = f),
		(n.createElement = w),
		(n.createPortal = function (n, l) {
			return w(Y, { __P: l }, n);
		}),
		(n.createRef = function () {
			return { current: null };
		}),
		(n.createRoot = X),
		(n.h = w),
		(n.hydrate = function (n, l) {
			var t = l && l.__;
			t || (t = X(l)), t.hydrate(n), (l.__ = t);
		}),
		(n.isValidElement = u),
		(n.options = l),
		(n.render = function (n, l) {
			var t = l && l.__;
			t || (t = X(l)), t.render(n), (l.__ = t);
		}),
		(n.toChildArray = function n(l, t) {
			if (((t = t || []), null == l || 'boolean' == typeof l));
			else if (Array.isArray(l)) for (l of l) n(l, t);
			else t.push(l);
			return t;
		});
});
//# sourceMappingURL=preact.umd.js.map
