import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";
import Array "mo:base/Array";
import Heap "mo:base/Heap";
import Deque "mo:base/Deque";
import Iter "mo:base/Iter";
import Order "mo:base/Order";

actor {

    class Company() {

        class DynamicHull() {
            class Point(x1 : Int, y1 : Int, name1 : Text) {
                public var x : Int = x1;
                public var y : Int = y1;
                public var name : Text = name1;
            };

            func dot(a : Point, b : Point) : Int {
                return a.x * b.x + a.y * b.y;
            };

            func cross(a : Point, b : Point) : Int {
                return a.x * b.y - a.y * b.x;
            };

            func sub(a : Point, b : Point) : Point {
                return Point(a.x - b.x, a.y - b.y, "");
            };

            let M : Nat = 40;

            var vecs = Array.init<TrieMap.TrieMap<Int, Point>>(M, TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash));
            var hull = Array.init<TrieMap.TrieMap<Int, Point>>(M, TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash));
            for (i in Iter.range(0, M - 1)) {
                vecs[i] := TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash);
                hull[i] := TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash);
            };

            func addLine(nw : Point, b : Nat) {
                label l loop {
                    if (vecs[b].size() == 0) break l;
                    switch (vecs[b].get(vecs[b].size() - 1)) {
                        case null break l;
                        case (?x) {
                            switch (hull[b].get(hull[b].size() - 1)) {
                                case null break l;
                                case(?y) {
                                    if (dot(x, sub(nw, y)) > 0) {
                                        hull[b].delete(hull[b].size() - 1);
                                        vecs[b].delete(vecs[b].size() - 1);
                                    }
                                }
                            }
                        }
                    }
                };
                if (hull[b].size() != 0) {
                    switch (hull[b].get(hull[b].size() - 1)) {
                        case null return;
                        case(?y) {
                            var p = sub(nw, y);
                            vecs[b].put(vecs[b].size(), Point(-1 * p.y, p.x, ""));
                        }
                    }
                };
                hull[b].put(hull[b].size(), nw);
            };

            func get(x : Int, b : Nat) : Point {
                if (hull[b].size() == 0) return Point(-1, -1, "");
                var q = Point(x, 1, "");
                var l : Int = 0;
                var r : Int = vecs[b].size() - 1;
                var ans : Int = vecs[b].size();
                while (l <= r) {
                    var mid = (l + r) / 2;
                    switch (vecs[b].get(mid)) {
                        case null return Point(-1, -1, "");
                        case (?x) {
                            switch (cross(q, x) < 0) {
                                case true { ans := mid; r := mid - 1; };
                                case false l := mid + 1;
                            };
                        };
                    };
                };
                switch (hull[b].get(ans)) {
                    case null return Point(-1, -1, "");
                    case (?x) return x;
                };
            };

            var values = Array.init<Heap.Heap<Point>>(M * M, Heap.Heap<Point>( func(a : Point, b : Point) : Order.Order {
                if (a.x > b.x) return #less;
                if (a.x == b.x) return #equal;
                return #greater;
            }));

            for (i in Iter.range(0, M * M - 1)) {
                values[i] := Heap.Heap<Point>( func(a : Point, b : Point) : Order.Order {
                                if (a.x > b.x) return #less;
                                if (a.x == b.x) return #equal;
                                return #greater;
                            });
            };

            public func ins(cost : Int, time : Nat, name : Text) {
                var blockNo : Nat = time / M % M;
                var timeMod : Nat = time % (M * M);
                vecs[blockNo] := TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash);
                hull[blockNo] := TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash);
                values[timeMod].put(Point(cost, time, name));
                var start : Nat = timeMod - timeMod % M;
                var end : Nat = start + M - 1;
                while (end >= start) {
                    switch (values[end].peekMin()) {
                        case null end += 0;
                        case (?w) {
                            var p = Point(-2 * w.y, w.x + w.y * w.y, w.name);
                            addLine(p, blockNo);
                        };
                    };
                    if (end == 0) start += 1;
                    if (end != 0) end -= 1;
                };
            };

            public func del(time : Nat) {
                var blockNo : Nat = time / M % M;
                var timeMod : Nat = time % (M * M);
                vecs[blockNo] := TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash);
                hull[blockNo] := TrieMap.TrieMap<Int, Point>(Int.equal, Int.hash);
                values[timeMod].deleteMin();
                var start : Nat = timeMod - timeMod % M;
                var end : Nat = start + M - 1;
                while (end >= start) {
                    switch (values[end].peekMin()) {
                        case null end += 0;
                        case (?w) {
                            var p = Point(-2 * w.y, w.x + w.y * w.y, w.name);
                            addLine(p, blockNo);
                        };
                    };
                    if (end == 0) start += 1;
                    if (end != 0) end -= 1;
                };
            };

            public func maxPriority(time : Nat) : Text {
                var mx : Int = -1000000 * 1000000;
                var claim = Point(-1, -1, "");
                for (i in Iter.range(0, M - 1)) {
                    var p = get(time, i);
                    // Debug.print(debug_show(p.x, p.y, p.name));
                    if (p.x != -1) {
                        if (dot(Point(time, 1, ""), p) > mx) {
                            mx := dot(Point(time, 1, ""), p);
                            claim := p;
                        };
                    };
                };
                return claim.name;
            };
        };

        var claims = Deque.empty<Text>();

        public func addClaim(name : Text) {
            claims := Deque.pushBack(claims, name);
        };

        public func removeClaim() {
            switch (Deque.popFront(claims)) {
                case (?(x, y)) claims := y;
                case null return;
            };
        };

        public func getClaim() : Text {
            switch (Deque.peekFront(claims)) {
                case (?x) return x;
                case null return "";
            };
        };

        var verifiedClaims = DynamicHull();

        public func addVerifiedClaim(cost : Nat, time : Nat, name : Text) {
            verifiedClaims.ins(cost, time, name);
        };

        public func removeVerifiedClaim(time : Nat) {
            verifiedClaims.del(time);
        };

        public func firstVerifiedClaim(time : Nat) : Text {
            return verifiedClaims.maxPriority(time);
        };
    };

    var companies = TrieMap.TrieMap<Text, Company>(Text.equal, Text.hash);

    public func addCompany(name : Text) {
        companies.put(name, Company());
    };

    public func addClaim(name : Text, userName : Text) {
        switch (companies.get(name)) {
            case null {return};
            case (?company) {
                company.addClaim(userName);
                companies.put(name, company);
            };
        };
    };

    public func removeClaim(name : Text) {
        switch (companies.get(name)) {
            case null {return};
            case (?company) {
                company.removeClaim();
                companies.put(name, company);
            };
        };
    };

    public query func getClaim(name : Text) : async Text {
        switch (companies.get(name)) {
            case null {return ""};
            case (?company) {
                return company.getClaim();
            };
        };
    };

    public func addVerifiedClaim(name : Text, cost : Nat, time : Nat, userName : Text) {
        switch (companies.get(name)) {
            case null return;
            case (?company) {
                company.addVerifiedClaim(cost, time, userName);
                companies.put(name, company);
            };
        };
    };

    public func removeVerifiedClaim(name : Text, time : Nat) {
        switch (companies.get(name)) {
            case null return;
            case (?company) {
                company.removeVerifiedClaim(time);
                companies.put(name, company);
            };
        };
    };

    public query func firstVerifiedClaim(name : Text, time : Nat) : async Text {
        switch (companies.get(name)) {
            case null return "";
            case (?company) {
                return company.firstVerifiedClaim(time);
            };
        };
    };


};
