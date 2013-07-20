//
//  childBase.m
//  weekOne
//
//  Created by Jeff Mitsou on 6/6/13.
//  Copyright (c) 2013 Jeff Mitsou. All rights reserved.
//

#import "menuBase.h"

@implementation menuBase

//synth
@synthesize statment, total;

// init
-(id)init
{
    self = [super init];
    if (self !=nil)
    {
        [self setTotal:0];
        [self setStatment:nil];

    }
    return self;
}

-(void)findTotal
{
    

}


@end
