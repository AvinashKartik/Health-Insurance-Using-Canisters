import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Text "mo:base/Text";
import TrieMap "mo:base/TrieMap";
import Hash "mo:base/Hash";
import Array "mo:base/Array";
import Heap "mo:base/Heap";
import Iter "mo:base/Iter";
import Order "mo:base/Order";

actor {

    class wallet() {
        var value : Int = 0;
        public func inc(x : Int) { 
            value += x;
        };
        public func read() : Int { 
            return value;
        };
    };

    let w = wallet();

    public func topUp(x : Int) {
        w.inc(x);
        Debug.print(debug_show(w.read()));
    };

    public func get() : async Int {
        return w.read();
    };

    // var values = Heap.Heap<Nat>(Nat.compare);

    // class Point(x1 : Int, y1 : Int, name1 : Text) {
    //     public var x : Int = x1;
    //     public var y : Int = y1;
    //     public var name : Text = name1;
    // };

    // var values = Heap.Heap<Point>( func(a : Point, b : Point) : Order.Order {
    //     if (a.x < b.x) return #less;
    //     if (a.x == b.x) return #equal;
    //     return #greater;
    // });

    // public func add(x : Nat, y : Nat, z : Text) {
    //     values.put(Point(x, y, z));
    // };

    // public func view() : async Text {
    //     switch (values.peekMin()) {
    //         case null return "";
    //         case(?w) return w.name;
    //     };
    // };

    // public func del() {
    //     values.deleteMin();
    // };

    var vecs = TrieMap.TrieMap<Int, Int>(Int.equal, Int.hash);
    vecs.put(1, 1);
    vecs.put(4, 1);
    Debug.print(debug_show(vecs.size()));
    vecs := TrieMap.TrieMap<Int, Int>(Int.equal, Int.hash);
    Debug.print(debug_show(vecs.size()));

    // var vecs = Array.init<TrieMap.TrieMap<Int, Int>>(2, TrieMap.TrieMap<Int, Int>(Int.equal, Int.hash));
    // for (i in Iter.range(0, 1)) {
    //     vecs[i] := TrieMap.TrieMap<Int, Int>(Int.equal, Int.hash);
    // };

    // vecs[1].put(1, 1);
    // vecs[0].put(1, 2);

    // for ((k,v) in vecs[0].entries()) {
    //     Debug.print(debug_show(k, v));
    // };

    // for ((k,v) in vecs[1].entries()) {
    //     Debug.print(debug_show(k, v));
    // };

    // var i = 0;
    // label l loop {
    //     switch (i < 3) {
    //         case true Debug.print(debug_show(i));
    //         case false Debug.print(debug_show(i * i));
    //     };
    //     if (i == 5) break l;
    //     i += 1;
    // };
};
