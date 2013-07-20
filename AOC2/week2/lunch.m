//
//  girl.m
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "lunch.h"

@implementation lunch

@synthesize numberOfSubs, priceOfSub;

//gives value to properties
-(id)init
{
    self = [super init];
    if (self != nil)
    {
        [self setNumberOfSubs:2];
        [self setPriceOfSub:5];
    }
    return self;
    
};

//math to find total
-(void)findTotal
{
    [self setTotal:(numberOfSubs * priceOfSub)];
}



@end
